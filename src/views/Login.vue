<template>
  <div class="login">
    <v-app id="login">
      <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
        <span>{{error}}</span>
        <v-btn @click="snackbar = false">Close</v-btn>
      </v-snackbar>

      <v-main>
        <v-container fluid class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-10">
                <v-toolbar dark color="primary">
                  <v-toolbar-title v-if="login">로그인</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="login? signin() : signup()" id="login-form">
                    <v-text-field prepend-icon="mdi-email" name="email" v-model="email" label="이메일" type="text" :rules="emailRules" ></v-text-field>
                    <v-text-field prepend-icon="mdi-lock" name="password" v-model="password" label="비밀번호" id="password" type="password" :rules="passwordRules" ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" form="login-form" :loading="loading">로그인</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    name: '',
    email: '',
    password: '',
    returnPath: '',
    error: '',
    loading: false,
    login: true,
    emailRules: [
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || '유효하지 않은 이메일입니다.'
      }
    ],
    passwordRules: [
      value => {
        return value.length >= 5 || '비밀번호는 최소 5자리 이상이어야 합니다.'
      }
    ],
    snackbar: false
  }),

  created () {
    this.returnPath = this.$route.query.returnPath || '/boardList'
    // this.SET_THEME()
  },

  methods: {
    signin () {
      this.loading = true

      const { email, password } = this

      // if (!email || !password) return alert('이메일이나 비밀번호가 공백입니다.')

      this.$store.dispatch('LOGIN', { email, password })
        .then(() => {
          this.$router.push(this.returnPath)
        })
        .catch(err => {
          console.log(err.response)
          // this.error = err.response.data.error
          !email || !password ? this.error = '이메일이나 비밀번호가 공백입니다.'
            : this.error = err.response.data.error
          this.loading = false
          this.snackbar = true
        })
    }
  }
}
</script>
