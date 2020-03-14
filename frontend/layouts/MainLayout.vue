<template>
  <v-app>
    <NavBar />
    <v-container class="fullHeight">
      <router-view />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'MainLayout',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="css" scoped>
    .fullHeight {
        height: 70vh;
    }
</style>
