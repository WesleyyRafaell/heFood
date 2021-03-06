import api from 'config/api'

export const ListAllRecipes = async () => {
	try {
		const result = await api.get('recipes?populate=*')
		const { data } = result.data
		return data
	} catch (error) {
		console.log('error', error)
	}
}

export const getRecipe = async (id: number | undefined) => {
	try {
		const result = await api.get(`recipes/${id}?populate=*`)
		const { data } = result.data
		return data
	} catch (error) {
		console.log('error', error)
	}
}

export const searchRecipe = async (query: string) => {
	try {
		const result = await api.get(`recipes?filters[name][$containsi]=${query}`)
		const { data } = result.data
		return data
	} catch (error) {
		console.log('error', error)
	}
}
