import axios from 'axios'

const domain = 'http://localhost:3010'
// const domain = 'https://cjobs.castle.co.kr:3000'

const request = {
  get (path, data) {
    return axios.get(`${domain + path}`, data)
  },
  post (path, data) {
    return axios.post(`${domain + path}`, data)
  },
  delete (path) {
    return axios.delete(`${domain + path}`)
  },
  put (path, data) {
    return axios.put(`${domain + path}`, data)
  }
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null
}

export const auth = {
  login (email, password) {
    return request.post('/login', { email, password })
      .then(({ data }) => data)
  }
}

export const board = {
  fetch (id) {
    return request.get(`/boards/view/${id}`).then(({ data }) => data)
  },
  fetchList () {
    return request.get('/boards').then(({ data }) => data)
  },
  create ({
    title, content, name, count
  }) {
    return request.post('/boards', {
      title,
      content,
      name,
      count
    }).then(({ data }) => data)
  },
  update (id, data) {
    return request.put(`/boards/view/${id}`, data).then(({ data }) => data)
  },
  destroy (id) {
    return request.delete(`/boards/view/${id}`)
  }
}