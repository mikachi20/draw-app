<template>
  <div class="textBlock">
    <h1>自分の好きな感情を表現してください</h1>
  </div>
  <div class="objectSelector">
    <div v-for="object in objects" :key="object">
      <svg
        :width="object.w / 3"
        :height="object.h / 3"
        :viewBox="viewport"
        style="background: #eee"
      >
        <rect
          :key="idx"
          :fill="object.color"
          :width="object.w * 4"
          :height="object.h * 4"
        ></rect>
      </svg>
    </div>
  </div>
  <div class="container">
    <!-- SVG定義 -->
    <svg
      :width="width"
      :height="height"
      :viewBox="viewport"
      style="background: #eee"
    >
      <rect
        v-for="(r, idx) in rects"
        :key="idx"
        @mousedown="move($event, idx)"
        :fill="r.color"
        :x="r.x"
        :y="r.y"
        :width="r.w"
        :height="r.h"
      ></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SVGDemo",
  data() {
    return {
      width: 500,
      height: 500,
      ratio: 1,
      dx: 0,
      dy: 0,
      viewport: "0 0 500 500",
      isMove: false,
      beforeMouseX: null,
      beforeMouseY: null,
      selectIdx: 0,
      objects: [
        {
          w: 100,
          h: 100,
          color: "green",
        },
        {
          w: 100,
          h: 100,
          color: "red",
        },
        {
          w: 200,
          h: 100,
          color: "blue",
        },
      ],
      rects: [
        {
          x: 0,
          y: 0,
          w: 50,
          h: 50,
          color: "green",
        },
        {
          x: 50,
          y: 50,
          w: 50,
          h: 50,
          color: "red",
        },
        {
          x: 100,
          y: 100,
          w: 100,
          h: 50,
          color: "blue",
        },
      ],
    }
  },
  // マウス操作関連
  mounted() {
    console.log("MOUNT LISTENER ON")
    document.addEventListener("mouseup", this.mouseUp)
    document.addEventListener("mousemove", this.mouseMove)
  },
  beforeUnmount() {
    console.log("MOUNT LISTENER OFF")
    document.removeEventListener("mouseup", this.mouseUp)
    document.removeEventListener("mousemove", this.mouseMove)
  },
  methods: {
    zoompan(e) {
      let [x, y, w, h] = this.viewport.split(" ").map((v) => parseFloat(v))
      if (e.ctrlKey) {
        // 拡大（Y軸が上がる場合） 縮小（Y軸が下がる場合）
        if (e.deltaY > 0) {
          w = w * 1.01
          h = h * 1.01
        } else {
          w = w * 0.99
          h = h * 0.99
        }
        this.makeViewBox(x, y, w, h)
        this.ratio = w / this.width
        e.preventDefault()
      } else {
        // 移動
        if (
          this.dx + e.deltaX > -this.width &&
          this.dy + e.deltaY > -this.width &&
          this.dx + e.deltaX < this.width * 2 &&
          this.dy + e.deltaY < this.width * 2
        ) {
          this.makeViewBox(x + e.deltaX, y + e.deltaY, w, h)
          this.dx += e.deltaX
          this.dy += e.deltaY
        }
      }
    },
    // viewboxを作成
    makeViewBox(x, y, w, h) {
      this.viewport = [x, y, w, h].join(" ")
    },
    // 図形を動かすフラグを立てる
    move(e, i) {
      this.isMove = true
      this.selectIdx = i
      e.preventDefault()
    },
    // マウスのクリックが終わった段階で初期化
    mouseUp(e) {
      this.isMove = false
      this.beforeMouseX = null
      this.beforeMouseY = null
      e.preventDefault()
    },
    // move中は前回まで動かした差分を取りながら座標を変化させていく
    mouseMove(e) {
      let firstX = e.offsetX * this.ratio + this.dx
      let firstY = e.offsetY * this.ratio + this.dy
      if (firstX <= 1 || firstX >= 500 || firstY <= 1 || firstY >= 500) {
        this.isMove = false
      }
      if (!this.isMove) return
      let mouseX = e.offsetX * this.ratio + this.dx
      let mouseY = e.offsetY * this.ratio + this.dy
      console.log("mouse" + mouseX, mouseY)
      let dx = 0
      let dy = 0
      if (this.beforeMouseX && this.beforeMouseY) {
        dx = mouseX - this.beforeMouseX
        dy = mouseY - this.beforeMouseY
      }
      this.beforeMouseX = mouseX
      this.beforeMouseY = mouseY
      let tempX = dx + Number(this.rects[this.selectIdx].x)
      let tempY = dy + Number(this.rects[this.selectIdx].y)
      if (tempX > 0) this.rects[this.selectIdx].x = tempX
      if (tempY > 0) this.rects[this.selectIdx].y = tempY
      console.log("temp" + tempX, tempY)
      e.preventDefault()
    },
  },
}
</script>
