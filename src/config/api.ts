import axios from 'axios'

const api = axios.create({
	baseURL: 'https://hefood-api.herokuapp.com/api/'
})

export default api
