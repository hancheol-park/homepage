<template>
  <div>
    <v-tabs v-model="activeTab" >
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>

      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route" 
        transition="v-expand-x-transition" reverse-transition="v-expand-x-transition">
        <router-view />
      </v-tab-item>
    </v-tabs>
  </div>
</template> 

<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: `/business/${this.id}`,
        tabs: [
          {id: '1', name: '지능형 고객상담 플랫폼', route: `/business/${this.id}/AIcounsel`},
          {id: '2', name: '크로스플랫폼 앱 개발', route: `/business/${this.id}/crossplatform`},
          {id: '3', name: '그래프데이터베이스', route: `/business/${this.id}/graphDB`},
          {id: '4', name: '챗봇 서비스 개발', route: `/business/${this.id}/chatbot`},
          {id: '5', name: '머신러닝 모델 개발', route: `/business/${this.id}/machinelearning`}
        ]
    }
  }
}
</script>
