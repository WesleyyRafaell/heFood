import api from 'config/api'

export const ListAllCategories = async () => {
	try {
		const result = await api.get('categories?populate=*')
		const { data } = result.data
		return data
	} catch (error) {
		console.log('error', error)
	}
}

export const getCategory = async (id: number | undefined) => {
	try {
		const result = await api.get(`categories/${id}?populate=*`)
		const { data } = result.data
		return data
	} catch (error) {
		console.log('error', error)
	}
}
