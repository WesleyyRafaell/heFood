import { useEffect, useState } from 'react'
import * as S from './styles'
import { getRecipe } from 'services/recipe.service'
import { ListAllCategories, getCategory } from 'services/category.service'

// components
import Header from 'components/Header'
import Category from 'components/ItemCategory'
import CardRecipe from 'components/CardRecipe'
import Loading from 'components/Loading'

type RecipeApiInfo = {
	id: number
	attributes: {
		name: string
		DurationTime: number
		PortionSize: number
		photo: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

type CategoryApiInfo = {
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

type Category = {
	id: number
	name: string
	selected: boolean
	image: string
}

type Recipe = {
	id: number
	name: string
	DurationTime: number
	PortionSize: number
	photo: string
}

const Home = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [recipes, setRecipes] = useState<Recipe[]>([])
	const [nameCategory, setNameCategory] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getInitialDataFromApi()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getInitialDataFromApi = async () => {
		const resultCategories = await ListAllCategories()
		const resultRecipes = await getRecipesFromCategoryId(1)

		if (!resultRecipes || !resultCategories) return

		const categories = formatArrayCategories(resultCategories)

		setInitialData(resultRecipes, categories)
		setLoading(false)
	}

	const getRecipesFromCategoryId = async (id: number) => {
		try {
			const category = await getCategory(id)

			const resultArray = category.attributes.recipes.data.map(
				async (item: RecipeApiInfo) => {
					const result = await getRecipe(item.id)
					return result
				}
			)

			const data = await Promise.all(resultArray)

			const recipes = formatArrayRecipes(data)
			return recipes
		} catch (error) {
			console.log('error', error)
		}
	}

	const setInitialData = (recipes: Recipe[], categories: Category[]) => {
		setNameCategory(categories[0].name)
		setCategories(categories)
		setRecipes(recipes)
	}

	const formatArrayRecipes = (resultRecipes: RecipeApiInfo[]) => {
		const newArrayRecipes = resultRecipes.map((item) => {
			return {
				id: item.id,
				name: item.attributes.name,
				DurationTime: item.attributes.DurationTime,
				PortionSize: item.attributes.PortionSize,
				photo: item.attributes.photo.data.attributes.url
			}
		})

		return newArrayRecipes
	}

	const formatArrayCategories = (resultCategories: []) => {
		const newArrayCategories = resultCategories.map((item: CategoryApiInfo) => {
			return {
				id: item.id,
				name: item.attributes.name,
				image: item.attributes.image.data.attributes.url,
				selected: false
			}
		})

		newArrayCategories[0].selected = true

		return newArrayCategories
	}

	const changeCategoryItemSelected = async (
		index: number,
		name: string,
		id: number
	) => {
		setLoading(true)
		const Categories = categories.map((item) => ({ ...item, selected: false }))
		Categories[index].selected = true

		const recipes = await getRecipesFromCategoryId(id)
		if (!recipes) return

		setRecipes(recipes)
		setNameCategory(name)
		setCategories(Categories)
		setLoading(false)
	}

	return (
		<S.Container>
			<Header />
			{loading ? (
				<S.ContainerLoading>
					<Loading />
				</S.ContainerLoading>
			) : (
				<S.Wrapper>
					<S.ContainerCategories>
						{categories.map((item, index) => (
							<Category
								key={item.id}
								action
								onClick={() =>
									changeCategoryItemSelected(index, item.name, item.id)
								}
								selected={item.selected}
								name={item.name}
								image={item.image}
							/>
						))}
					</S.ContainerCategories>
					<S.TitleCategory>{nameCategory}</S.TitleCategory>
					<S.ContainerRecipes>
						{recipes.map(({ name, PortionSize, DurationTime, photo, id }) => (
							<CardRecipe
								key={id}
								idItem={id}
								title={name}
								minutes={DurationTime}
								portions={PortionSize}
								photo={photo}
							/>
						))}
					</S.ContainerRecipes>
				</S.Wrapper>
			)}
		</S.Container>
	)
}

export default Home
