<template>
<v-container>
  <div class="pa-sm-16">
    <v-card
      color="grey lighten-1"
      outlined
    >
      <input v-model="title" class="pa-sm-4 pl-3 py-3">
      <p class="px-sm-4 pl-3 py-4 mb-0 white">{{createdAt}}</p>
    </v-card>
    <div class="py-2">
      <viewer
        :initialValue="board.content"
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical" 
      />
      <v-row class="pa-3" justify=end>
        <v-btn outlined color="blue" @click="updateClick" v-if="$store.getters.isAuthenticated">수정</v-btn>
        <v-btn outlined color="red" @click="deleteClick" v-if="$store.getters.isAuthenticated">삭제</v-btn>
      </v-row>
    </div>
    <v-btn outlined block color="grey" @click="listClick">목록</v-btn>
  </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

import { Viewer } from '@toast-ui/vue-editor'

export default {
  components: {
    viewer: Viewer
  },
  name: 'BoardView',
  data () {
    return {
      title: '',
      content: '',
      createdAt: ''
    }
  },
  created () {
    this.FETCH_BOARD_LIST().then(() => {
      if (this.board) {
        this.title = this.board.title
        this.content = this.board.content
        this.createdAt = this.board.createdAt
      }
    })
  },
  computed:{
    ...mapState({
      board: 'board'
    })
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD_LIST',
      'DELETE_BOARD',
      'UPDATE_BOARD'
    ]),
    listClick () {
      this.$router.push('/boardlist')
    },
    deleteClick () {
      this.DELETE_BOARD()
      this.$router.push('/boardlist')
      alert('삭제되었습니다.')
    },
    updateClick () {
      this.$router.push('/boardlist/modify')
    }
  }
}
</script>