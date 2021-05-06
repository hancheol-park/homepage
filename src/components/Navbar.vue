<template>
  <div class="navbar">
    <v-app-bar
      color="white"
      app
    >
      <v-app-bar-nav-icon @click.prevent="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pa-0">
        <router-link to="/" class="text--primary" style="text-decoration: none">
          <v-row class="ma-1">
            <v-avatar size="32"><v-img src="../../public/img/logo.png"></v-img></v-avatar>
            <h4>클라우드포스(주)</h4>
          </v-row>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <div>
            <v-btn icon @click.prevent="login" v-bind="attrs" v-on="on" v-if="!$store.getters.isAuthenticated">
              <v-icon>mdi-login</v-icon>
            </v-btn>
          </div>
          <v-btn icon @click.prevent="logout" v-bind="attrs" v-on="on" v-if="$store.getters.isAuthenticated">
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <div>
          <span v-if="!$store.getters.isAuthenticated">로그인</span>
        </div>
        <span v-if="$store.getters.isAuthenticated">로그아웃</span>
      </v-tooltip>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense nav>
        <div v-for="item in items" :key="item.title">
          <v-list-group 
            :group="item.title"
            v-if="item.items" 
            v-model="item.active" 
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item 
              v-for="subItem in item.items" 
              :key="subItem.title" 
              :to="subItem.route"
              active-class="light-blue white--text"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            active-class="light-blue white--text"
            v-model="item.active" 
            v-else 
            :to="item.route" 
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: 0,
      items: [
        {
          title: '회사소개',
          route: '/introduce',
          items: [
            {
              title: '회사소개',
              route: '/introduce/1/company'
            },
            {
              title: '특허 및 인증',
              route: '/introduce/1/patent'
            },
            {
              title: '오시는길',
              route: '/introduce/1/directions'
            }
          ]
        },
        {
          title: '사업소개',
          route: '/business',
          items: [
            {
              title: '지능형 고객상담 플랫폼',
              route: '/business/1/Aicounsel'
            },
            {
              title: '크로스플랫폼 앱 개발',
              route: '/business/1/crossplatform'
            },
            {
              title: '그래프데이터베이스',
              route: '/business/1/graphDB'
            },
            {
              title: '챗봇 서비스 개발',
              route: '/business/1/chatbot'
            },
            {
              title: '머신러닝 모델 개발',
              route: '/business/1/machinelearning'
            }
          ]
        },
        {
          title: '홍보센터',
          route: '/boardlist'
        }
      ]
    }
  },
    methods: {
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push('/')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
