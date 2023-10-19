<template>
  <v-app-bar app >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-app-bar-title>MyApp</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout">
    
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    logout() {}
  }
}
</script>
<style scoped></style>
