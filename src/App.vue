<template>
  <v-app id="app">
    <SideBarView />

    <HeaderView />

    <v-main>
      <router-view></router-view>
    </v-main>

    <FooterView />
  </v-app>
</template>

<script>
import FooterView from './components/baseComponent/FooterView.vue'
import HeaderView from './components/baseComponent/HeaderView.vue'
import SideBarView from './components/baseComponent/SideBarView.vue'

export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    FooterView,
    HeaderView,
    SideBarView
  },
  methods: {}
}
</script>

<style scoped></style>
