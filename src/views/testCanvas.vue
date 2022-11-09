<template>
  <div class="textBlock">
    <h1>実のなる木を描画してください。(5分以内でお願いします)</h1>
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
      <div
        id="cbox"
        style="border: 2px solid white; color: black"
        v-on:click="changeColor('white')"
      >
        消しゴム
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
  <h3 id="alertArea">{{ textAlert }}</h3>
  <button class="button" v-on:click="download">画像を提出する</button>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      canvas: null,
      context: null,
      isDrag: false,
      selectColor: "black",
      timeCount: 0,
      timeM: 5,
      timeS: 0,
      isTrue: true,
      textAlert: "",
    }
  },
  mounted() {
    this.canvas = document.getElementById("myCanvas")
    this.context = this.canvas.getContext("2d")
    this.context.lineCap = "round"
    this.context.lineJoin = "round"
    this.context.lineWidth = 5
    this.context.strokeStyle = "#000000"
    this.context.beginPath()
    this.context.fillStyle = "rgb(255, 255, 255)"
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  },
  methods: {
    setTime() {
      this.timeCount++
      this.timeM = 4 - Math.floor(this.timeCount / 60)
      this.timeS = 60 - (this.timeCount % 60)
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
      if (this.isTrue) {
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
      if (color == "white") {
        alert("消しゴムを選択しました")
      } else {
        alert(`線の色を${color}に変えました`)
      }
    },
    async download() {
      this.textAlert = ""
      let imageDatas = this.context.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      ).data
      let countImageDatas = imageDatas.filter((data) => data === 255)
      if (countImageDatas.length > 940000) {
        let zanryou = (1000000 - countImageDatas.length) / 60000
        this.textAlert =
          "描画量が足りません。現在の描画量の" +
          (100 + (100 - zanryou.toFixed(2) * 100)) +
          "%ほどが必要です"
        return
      }
      let isOk = confirm(
        "現在の描画内容で完了します。OKボタンを押すと画面が遷移して次に移ります。"
      )
      if (isOk) {
        let base64 = this.canvas.toDataURL("image/png")
        let drawId = ""
        // console.log(base64)
        try {
          await addDoc(collection(db, "productionData"), {
            url: base64,
          }).then((docRef) => {
            // console.log(docRef.id)
            drawId = docRef.id
          })
          this.$router.push({ path: `/about/${drawId}` })
        } catch {
          alert(
            "不明なエラーを検出しました。お手数ですがもう一度やり直してください"
          )
        }
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

#alertArea {
  color: red;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  background: rgb(168, 241, 195);
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 260px;
  padding: 10px 25px;
  color: #080101;
  transition: 0.3s ease-in-out;
  font-weight: 500;
}
</style>
