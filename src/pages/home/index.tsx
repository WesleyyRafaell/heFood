import * as S from './styles'

// components
import Header from 'components/Header'
import Category from 'components/ItemCategory'
import { useState } from 'react'
import CardRecipe from 'components/CardRecipe'

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

const arr2 = [1, 1, 1, 1, 1]

const Home = () => {
	const [categories, setCategories] = useState(arr)

	const changeCategoryItemSelected = (index: number) => {
		const Categories = categories.map((item) => ({ ...item, selected: false }))
		Categories[index].selected = true
		setCategories(Categories)
	}

	return (
		<S.Container>
			<Header />
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
					{arr2.map((item, index) => (
						<CardRecipe title="Bolo" minutes={15} portions={2} key={index} />
					))}
				</S.ContainerRecipes>
			</S.Wrapper>
		</S.Container>
	)
}

export default Home
