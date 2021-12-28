import { useEffect, useState } from 'react'
import * as S from './styles'
import { ListAllRecipes } from 'services/recipe.service'

// components
import Header from 'components/Header'
import Category from 'components/ItemCategory'
import CardRecipe from 'components/CardRecipe'
import Loading from 'components/Loading'

const arr = [
	{
		id: 1,
		name: 'teste1',
		selected: true
	},
	{
		id: 2,
		name: 'teste2',
		selected: false
	},
	{
		id: 3,
		name: 'teste3',
		selected: false
	},
	{
		id: 4,
		name: 'teste4',
		selected: false
	},
	{
		id: 5,
		name: 'teste5',
		selected: false
	}
]

type RecipeInfo = {
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

const Home = () => {
	const [categories, setCategories] = useState(arr)
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const result = await ListAllRecipes()
			if (!result) return
			setRecipes(result)
			setLoading(false)
		})()
	}, [])

	const changeCategoryItemSelected = (index: number) => {
		const Categories = categories.map((item) => ({ ...item, selected: false }))
		Categories[index].selected = true
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
								key={index}
								action
								onClick={() => changeCategoryItemSelected(index)}
								selected={item.selected}
								name={item.name}
							/>
						))}
					</S.ContainerCategories>
					<S.TitleCategory>Sem lactose</S.TitleCategory>
					<S.ContainerRecipes>
						{recipes.map(
							({
								attributes: { name, PortionSize, DurationTime, photo },
								id
							}: RecipeInfo) => (
								<CardRecipe
									key={id}
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
