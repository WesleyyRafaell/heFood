import { useEffect, useState } from 'react'
import * as S from './styles'
import { ListAllRecipes } from 'services/recipe.service'
import { ListAllCategories } from 'services/category.service'

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
					formats: {
						small: {
							url: string
						}
					}
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

const Home = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [nameCategory, setNameCategory] = useState('')
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getInitialDataFromApi = async () => {
			const resultRecipes = await ListAllRecipes()
			const resultCategories = await ListAllCategories()

			if (!resultRecipes && !resultCategories) return

			const categories = formatArrayCategories(resultCategories)

			setInitialData(resultRecipes, categories)
			setLoading(false)
		}

		getInitialDataFromApi()
	}, [])

	const setInitialData = (recipes: [], categories: Category[]) => {
		setNameCategory(categories[0].name)
		setCategories(categories)
		setRecipes(recipes)
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

	const changeCategoryItemSelected = (index: number, name: string) => {
		const Categories = categories.map((item) => ({ ...item, selected: false }))
		Categories[index].selected = true
		setNameCategory(name)
		setCategories(Categories)
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
								onClick={() => changeCategoryItemSelected(index, item.name)}
								selected={item.selected}
								name={item.name}
								image={item.image}
							/>
						))}
					</S.ContainerCategories>
					<S.TitleCategory>{nameCategory}</S.TitleCategory>
					<S.ContainerRecipes>
						{recipes.map(
							({
								attributes: { name, PortionSize, DurationTime, photo },
								id
							}: RecipeApiInfo) => (
								<CardRecipe
									key={id}
									idItem={id}
									title={name}
									minutes={DurationTime}
									portions={PortionSize}
									photo={photo.data.attributes.formats.small.url}
								/>
							)
						)}
					</S.ContainerRecipes>
				</S.Wrapper>
			)}
		</S.Container>
	)
}

export default Home
