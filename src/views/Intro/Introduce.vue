<template>
  <div class="intoduce">
    <div>
      <v-tabs v-model="activeTab" >
        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
          {{ tab.name }}
        </v-tab>

        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route" 
          transition="v-expand-x-transition" reverse-transition="v-expand-x-transition">
          <router-view></router-view>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template> 

<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: `/introduce/${this.id}`,
        tabs: [
          {id: '1', name: '회사소개', route: `/introduce/${this.id}/company`},
          {id: '2', name: '특허 및 인증', route: `/introduce/${this.id}/patent`},
          {id: '3', name: '오시는 길', route: `/introduce/${this.id}/directions`}
        ]
    }
  }
}
</script>
