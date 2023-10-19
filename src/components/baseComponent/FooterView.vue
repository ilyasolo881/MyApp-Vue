<template>
  <v-footer class="footer" app>
    <!-- <v-btn @click="navigateTo('https://www.google.com')" color="indigo-lighten-4">Посилання</v-btn>
    <v-btn @click="navigateTo('https://www.google.com')" color="indigo-lighten-4">Посилання</v-btn>
    <v-btn @click="navigateTo('https://www.google.com')" color="indigo-lighten-4">Посилання</v-btn>
    <v-btn @click="navigateTo('https://www.google.com')" color="indigo-lighten-4">Посилання</v-btn>
    <v-btn @click="navigateTo('https://www.google.com')" color="indigo-lighten-4">Посилання</v-btn> -->
  </v-footer>
</template>

<script>
export default {
  methods: {
    navigateTo(url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped></style>
