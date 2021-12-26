import * as S from './styles'
import Header from 'components/Header'
import InformationRecipe from 'components/InformationRecipe'
import Category from 'components/ItemCategory'
import { useState } from 'react'

const arr = [
	{
		id: 1,
		name: 'teste1',
		selected: false
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

const DetailsRecipe = () => {
	const [categories, setCategories] = useState(arr)
	return (
		<S.Container>
			<Header back />
			<S.Block>
				<InformationRecipe />
				<S.ContainerCategories>
					{categories.map((item, index) => (
						<Category key={index} selected={item.selected} name={item.name} />
					))}
				</S.ContainerCategories>
			</S.Block>
		</S.Container>
	)
}

export default DetailsRecipe
