import { useEffect, useState } from 'react'
import * as S from './styles'
import Header from 'components/Header'
import InformationRecipe from 'components/InformationRecipe'
import Category from 'components/ItemCategory'
import BoxInformation from 'components/BoxInformation'
import { useParams } from 'react-router-dom'
import { getRecipe } from 'services/recipe.service'
import Loading from 'components/Loading'
import { getCategory } from 'services/category.service'

type Recipe = {
	name: string
	DurationTime: number
	PortionSize: number
	photo: string
	ingredients: string[]
	preparation: string[]
	categories: []
}

type Category = {
	id: number
	name: string
	image: string
}

type RecipeApi = {
	id: number
	attributes: {
		name: string
		DurationTime: number
		PortionSize: number
		Ingredients: string
		Preparation: string
		categories: {
			data: []
		}
		photo: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

type CategoryApi = {
	id: number
	attributes: {
		name: string
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

const DetailsRecipe = () => {
	const [categories, setCategories] = useState<Category[]>()
	const [recipe, setRecipe] = useState<Recipe>()
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		const getInitialData = async () => {
			const result = await getRecipe(id)
			if (!result) return
			const recipeData = createRecipeDataFromApi(result)
			const categoriesData = await formattingArrayCategories(
				result.attributes.categories.data
			)

			setRecipe(recipeData)
			setCategories(categoriesData)
			setLoading(false)
		}

		getInitialData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	const createRecipeDataFromApi = (result: RecipeApi) => {
		return {
			name: result.attributes.name,
			DurationTime: result.attributes.DurationTime,
			PortionSize: result.attributes.PortionSize,
			photo: result.attributes.photo.data.attributes.url,
			ingredients: result.attributes.Ingredients.split('\n'),
			preparation: result.attributes.Preparation.split('\n'),
			categories: result.attributes.categories.data
		}
	}

	const formattingArrayCategories = async (resultCategories: []) => {
		const categories = await getCategoriesFromApi(resultCategories)

		if (!categories) return

		const categoriesFormated = categories.map((item: CategoryApi) => {
			return {
				id: item.id,
				name: item.attributes.name,
				image: item.attributes.image.data.attributes.url
			}
		})

		categoriesFormated.shift()

		return categoriesFormated
	}

	const getCategoriesFromApi = async (categories: []) => {
		try {
			const Promises = categories.map(async (item: CategoryApi) => {
				const result = await getCategory(item.id)
				return result
			})

			const data = await Promise.all(Promises)
			return data
		} catch (error) {
			console.log('getCategoriesFromApi', error)
		}
	}

	return (
		<S.Container>
			<Header back />
			<S.Block>
				{loading ? (
					<S.ContainerLoading>
						<Loading />
					</S.ContainerLoading>
				) : (
					<>
						{recipe && (
							<>
								<InformationRecipe
									title={recipe.name}
									minutes={recipe.DurationTime}
									portions={recipe.PortionSize}
									photo={recipe.photo}
								/>
								{categories && (
									<S.ContainerCategories>
										<S.TitleCategories>Categorias da receita</S.TitleCategories>
										<S.BoxCategories>
											{categories.map((item, index) => (
												<Category
													key={index}
													name={item.name}
													image={item.image}
												/>
											))}
										</S.BoxCategories>
									</S.ContainerCategories>
								)}
								<S.ContainerPreparation>
									<S.BoxPreparation>
										<BoxInformation
											title="Ingredientes"
											itens={recipe.ingredients}
										/>
									</S.BoxPreparation>
									<S.BoxPreparation>
										<BoxInformation
											title="Modo de preparo"
											itens={recipe.preparation}
										/>
									</S.BoxPreparation>
								</S.ContainerPreparation>
							</>
						)}
					</>
				)}
			</S.Block>
		</S.Container>
	)
}

export default DetailsRecipe
