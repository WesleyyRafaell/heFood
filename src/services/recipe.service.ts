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
