<template>
  <div class="footer">
    <v-footer
      app
      dark
      padless
    >
      <v-card
        class="flex"
      >
        <v-card-text class="py-2 white--text text-center">
          &copy;&nbsp;{{ new Date().getFullYear() }}<strong> 클라우드포스(주)</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {

}
</script>
