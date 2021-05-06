<template>
  <div class="promotion">
    <v-card>
      <v-card-title>
        <v-text-field
          class="py-2"
          v-model="searchInput"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <div>
          <v-btn text small @click="searchClick"><v-icon>mdi-magnify</v-icon></v-btn>
        </div>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="boardList"  
      :search="search"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
      @click:row="handleClick"
      sort-by="id"
      update: sort-desc
    ><pagination-list :list-array="boardList" /></v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
    <v-row class="px-3">
      <v-btn outlined color="blue" @click="writeClick" v-if="$store.getters.isAuthenticated">작성</v-btn>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      searchInput: '',
      search: '',
      title: 'abc',
      content: '',
      count: 0,
      headers: [
        { text: 'No', value: 'id', filterable: false },
        { text: '제목', value: 'title'},
        { text: '작성자', value: 'name', align: 'end', filterable: false },
        { text: '등록일', value: 'createdAt', align: 'end', filterable: false }
      ],
    }
  },
  computed:{
    ...mapState({
      board: 'board',
      boardList: 'boardList'
    })
  },
  created () {
    this.FETCH_BOARD_LIST()
  },
  methods: {
    ...mapActions([
      'FETCH_BOARD',
      'FETCH_BOARD_LIST',
      'UPDATE_BOARD'
    ]),
    handleClick (board) {
      this.$store.state.board = board
      this.$router.push('/boardlist/view')
    },
    writeClick () {
      this.$router.push('/boardlist/writer')
    },
    searchClick () {
      this.search = this.searchInput
    }
  }  
}
</script>