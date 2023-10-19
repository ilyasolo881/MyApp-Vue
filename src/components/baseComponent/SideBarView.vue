<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      <v-icon icon="mdi-view-list"></v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title>MyApp</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout">
      <v-icon icon="mdi-logout-variant"></v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/48.jpg"
        title="Ilya Solo"
        subtitle="V_Solyanogo@gmai.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-counter"
        title="Counter"
        :to="{ name: 'Counter' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-checkbox-marked-circle-auto-outline"
        title="ToDo"
        :to="{ name: 'ToDo' }"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  },
  methods: {
    logout() {}
  }
}
</script>

<style scoped></style>
