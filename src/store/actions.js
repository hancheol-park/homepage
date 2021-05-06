import { board, auth } from '../api'
import state from './state'

const actions = {
  LOGIN ({ commit }, { email, password }) {
    return auth.login(email, password)
      .then(({ accessToken, userName }) => commit('LOGIN', { accessToken, userName }))
  },
  FETCH_BOARD ({ commit }) {
    return board.fetch(state.board.id)
      .then(data => commit('SET_BOARD', data))
  },
  FETCH_BOARD_LIST ({ commit }) {
    return board.fetchList()
      .then(data => commit('SET_BOARD_LIST', data))
  },
  ADD_BOARD ({ dispatch }, {
    title, content, name, count
  }) {
    return board.create({
      title,
      content,
      name,
      count
    })
      .then(() => dispatch('FETCH_BOARD'))
  },
  UPDATE_BOARD ({ dispatch }, {
    id, title, content, count
  }) {
    return board.update(id,{
      title,
      content,
      count
    })
      .then(() => dispatch('FETCH_BOARD'))
  },
  DELETE_BOARD ({ dispatch }) {
    return board.destroy(state.board.id)
      .then(() => dispatch('FETCH_BOARD'))
  },
}

export default actions
