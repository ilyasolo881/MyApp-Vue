<template>
  <v-app id="app">
    <SideBarView />
    <HeaderView />
    <v-main class="d-flex justify-center mb-16">
      <router-view></router-view>
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import FooterView from './components/baseComponent/FooterView.vue'
import SideBarView from './components/baseComponent/SideBarView.vue'

export default {
  components: {
    FooterView,
    SideBarView
  },
  methods: {}
}
</script>

<style scoped></style>
