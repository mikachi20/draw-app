<template>
  <TestCanvas />
  <Test />
</template>

<script>
import Test from "./components/DrawTest.vue"
import TestCanvas from "./components/testCanvas.vue"

export default {
  name: "App",
  components: {
    Test,
    TestCanvas,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
