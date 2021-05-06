<template>
  <v-app>
    <Navbar v-if="show"></Navbar>

    <v-main class="mx-4">
      <router-view></router-view>
    </v-main>

    <Footer v-if="show"></Footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer },
  computed: {
    show () {
      return this.$route.path !== '/login' && this.$route.matched[0].path !== '*'
    }
  }
};
</script>
