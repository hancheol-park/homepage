<template>
  <v-container>
    <v-row class="px-3">
      <h3>제목</h3>
    </v-row>
    <v-row class="px-3">
      <v-text-field
        :counter="50"
        name="title"
        v-model="title"
      ></v-text-field>
    </v-row>
    <v-row class="pa-3">
      <h3>내용</h3>
    </v-row>
    <editor
    ref="toastuiEditor"
    :initialValue="board.content"
    :options="editorOptions"
    initialEditType="markdown"
    height="600px"
    v-model="content"
    />
    <v-row class="pa-3">
      <v-btn block outlined color="blue" @click="modifyClick">수정</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'

export default {
  name: 'BoardWriter',
  components: {
    editor: Editor
  },
  data () {
    return {
      title: "",
      content: "",
      editorOptions: {
        hideModeSwitch: false
      }
    }
  },
  created () {
    this.FETCH_BOARD().then(() => {
      if (this.board) {
        this.id= this.board.id
        this.title = this.board.title
        this.content = this.board.content
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
      'FETCH_BOARD',
      'UPDATE_BOARD'
    ]),
    modifyClick () {
      if (this.title.length <= 0) {
        alert('제목을 입력해주세요')
      } else {
        this.content= this.$refs.toastuiEditor.invoke('getMarkdown')
        const {id, title, content} = this
        this.UPDATE_BOARD({
          id,
          title,
          content
        })
        alert('수정되었습니다')
        this.$router.push('/boardlist')
      }
    }
  }
}
</script>