<template>
  <h2>二つのテストを行います。(所要時間は3~7分を予定)</h2>
  <h3>1, 描画テスト(~5分)</h3>
  ※スマートフォンからは操作できません。マウス操作でお願いします。
  <br />
  ※表示されるキャンバスに描画する量に下限を設定しております。
  <h3>2, 選択式テスト(全10門)</h3>
  <button class="button" v-on:click="startCanvas">開始する</button>
</template>

<script>
export default {
  methods: {
    startCanvas() {
      this.$router.push("/canvas")
    },
  },
}
</script>

<style>
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
