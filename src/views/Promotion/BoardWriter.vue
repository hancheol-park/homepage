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
      :options="editorOptions"
      initialEditType="markdown"
      height="600px"
      v-model="content"
    />
    <v-row class="pa-3">
      <v-btn block outlined color="blue" @click="writeClick">등록</v-btn>
      <v-btn block outlined color="blue" @click="logClick">log</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
      title: '',
      content: '',
      name: '',
      count: 0,
      editorOptions: {
        hideModeSwitch: false
      }
    }
  },
    computed:{
    ...mapState({
      userName: 'userName'
    })
  },
  methods: {
    ...mapActions([
      'ADD_BOARD'
    ]),
    writeClick () {
      if (this.title.length <= 0) {
        alert('제목을 입력해주세요')
      } else {
        this.content= this.$refs.toastuiEditor.invoke('getMarkdown')
        const { title, content, name, count } = this
        this.name = this.userName
        this.ADD_BOARD({
          title,
          content,
          name,
          count
        })
        console.log(this.name)
        alert('저장되었습니다')
        this.$router.push('/boardlist')
      }
    },
    logClick () {
      this.name = this.userName
      console.log(this.name)
    }
  }
}
</script>