<template>
  <div class="textBlock">
    <h1>木を描画してください。</h1>
  </div>
  <div class="currentColor">現在の色：{{ selectColor }}</div>
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
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      context: null,
      isDrag: false,
      selectColor: "black",
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
@media screen and (max-width: 480px) {
}
</style>
