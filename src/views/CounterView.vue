<template>
  <v-container class="d-flex justify-center align-center flex-column">
    <smileList />
    <btnResult />
    <btnReset />
  </v-container>
</template>
<script>
import smileList from '../components/smileList.vue'
import btnResult from '../components/btnResult.vue'
import btnReset from '../components/btnReset.vue'

export default {
  components: {
    smileList,
    btnResult,
    btnReset
  }
}
</script>
<style></style>
