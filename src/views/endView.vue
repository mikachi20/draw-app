<template>
  <h1>※クラウドワークスからご参加いただいた方はこちらをご回答ください。</h1>
  <h2 id="showId">{{ ID }}</h2>
  <h1>ご協力ありがとうございました。 このままこのページを閉じてください。</h1>
</template>

<script>
export default {
  data() {
    return {
      ID: this.$route.params.id.toString(),
    }
  },
}
</script>
