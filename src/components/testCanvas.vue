<template>
  <div class="textBlock">
    <h1>木を描画してください</h1>
  </div>
  <div class="changeColor">
    <div id="cbox">現在の色：{{ selectColor }}</div>
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
  </div>
  <div id="canvas-area">
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
}
#cbox {
  margin: 20px;
  padding: 5px;
}
</style>
