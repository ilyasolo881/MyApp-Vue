<template>
  <v-container class="d-flex justify-center align-center flex-column">
    <smileList />
    <btnView />
    <btnView />
  </v-container>
</template>
<script>
import smileList from '../components/smileList.vue'
import btnView from '../components/BtnView.vue'

export default {
  components: {
    smileList,
    btnView
  }
}
</script>
<style></style>
