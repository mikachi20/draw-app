<template>
  <div class="textBlock">
    <h1>木を描画してください。</h1>
  </div>
  <div class="infoBlock">
    <div id="currentColor">現在の色：{{ selectColor }}</div>
    <div id="displayTime">残り時間：{{ timeM }}分{{ timeS }}秒</div>
  </div>
  <div class="content">
    <div class="changeColor" style="float: left">
      <h2>🖌</h2>
      <div
        id="cbox"
        style="border: 2px solid black; color: black"
        v-on:click="changeColor('black')"
      >
        black
      </div>
      <div
        id="cbox"
        style="border: 2px solid green; color: green"
        v-on:click="changeColor('green')"
      >
        green
      </div>
      <div
        id="cbox"
        style="border: 2px solid red; color: red"
        v-on:click="changeColor('red')"
      >
        red
      </div>
      <div
        id="cbox"
        style="border: 2px solid brown; color: brown"
        v-on:click="changeColor('brown')"
      >
        brown
      </div>
      <div
        id="cbox"
        style="border: 2px solid blue; color: blue"
        v-on:click="changeColor('blue')"
      >
        blue
      </div>
    </div>
    <div id="canvas-area" style="float: right">
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        v-on:mousedown="dragStart"
        v-on:mouseup="dragEnd"
        v-on:mouseout="dragEnd"
        v-on:mousemove="draw"
      >
      </canvas>
    </div>
  </div>
  <button v-on:click="download">画像を提出する</button>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      context: null,
      isDrag: false,
      selectColor: "black",
      // timeStart: 0,
      timeCount: 0,
      timeM: 5,
      timeS: 0,
      isTrue: true,
    }
  },
  mounted() {
    this.canvas = document.getElementById("myCanvas")
    this.context = this.canvas.getContext("2d")
    this.context.lineCap = "round"
    this.context.lineJoin = "round"
    this.context.lineWidth = 5
    this.context.strokeStyle = "#000000"
  },
  methods: {
    setTime() {
      // console.log("kaisi")
      // let now = new Date()
      // let datet = parseInt((now.getTime() - this.timeStart.getTime()) / 1000)
      // let min = parseInt((datet / 60) % 60)
      // let sec = datet % 60
      // this.timeM = 4 - min
      // if (sec >= 10) {
      //   this.timeS = 59 - sec
      //   this.timeS = "0" + this.timeS
      // } else {
      //   this.timeS = 59 - sec
      // }

      this.timeCount++
      this.timeM = 4 - Math.floor(this.timeCount / 60)
      this.timeS = 60 - (this.timeCount % 60)
      console.log(this.timeCount, this.timeM, this.timeS)
      setTimeout(this.setTime, 1000)
    },
    draw(e) {
      let x = e.offsetX
      let y = e.offsetY
      if (!this.isDrag) {
        return
      }
      this.context.lineTo(x, y)
      this.context.stroke()
    },
    dragStart(e) {
      let x = e.offsetX
      let y = e.offsetY
      this.context.beginPath()
      this.context.lineTo(x, y)
      this.context.stroke()
      this.isDrag = true
      // this.timeStart = new Date()
      if (this.isTrue) {
        console.log("qqqqqqqqqqqqqqqqqqqqqqqq")
        this.setTime()
        this.isTrue = false
      }
    },
    dragEnd() {
      this.context.closePath()
      this.isDrag = false
    },
    changeColor(color) {
      this.context.strokeStyle = color
      this.selectColor = color
      alert(`線の色を${color}に変えました`)
    },
    download() {
      let isOk = confirm(
        "現在の描画内容で完了します。OKボタンを押すと画面が遷移して次に移ります。"
      )
      if (isOk) {
        let base64 = this.canvas.toDataURL("image/png")
        console.log(base64)
      }
    },
  },
}
</script>

<style scoped>
#myCanvas {
  border: 1px solid #000000;
}
.changeColor {
  justify-content: center;
  display: flex;
  flex-flow: column;
  background-color: rgb(240, 240, 245);
  height: 498px;
}
#cbox {
  margin: 20px;
  padding: 5px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
