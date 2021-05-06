import { setAuthInHeader } from '../api'

const mutations = {
  LOGIN (state, { accessToken, userName }) {
    if (!accessToken) return
    state.accessToken = accessToken
    state.userName = userName
    localStorage.accessToken = accessToken
    setAuthInHeader(accessToken)
  },
  LOGOUT (state) {
    state.accessToken = null
    delete localStorage.accessToken
    setAuthInHeader(null)
  },
  SET_BOARD (state, { item }) {
    state.board = item
  },
  SET_BOARD_LIST (state, { itemList }) {
    const handleDate = (list, prop) => {
      return list.map(item => {
        const obj=Object.assign({}, item)
        obj[prop]=new Date(obj[prop]).toLocaleDateString()
        return obj
      });
    }
    state.boardList = handleDate(itemList, 'createdAt')
  },
}

export default mutations
