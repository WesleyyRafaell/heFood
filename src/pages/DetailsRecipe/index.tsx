import { useEffect, useState } from 'react'
import * as S from './styles'
import Header from 'components/Header'
import InformationRecipe from 'components/InformationRecipe'
import Category from 'components/ItemCategory'
import BoxInformation from 'components/BoxInformation'
import { useParams } from 'react-router-dom'
import { getRecipe } from 'services/recipe.service'
import Loading from 'components/Loading'

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

type Recipe = {
	name: string
	DurationTime: number
	PortionSize: number
	photo: string
	ingredients: []
	preparation: []
}

const DetailsRecipe = () => {
	const [categories, setCategories] = useState()
	const [recipe, setRecipe] = useState<Recipe>()
	const [loading, setLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		const getInitialData = async () => {
			const result = await getRecipe(id)

			if (!result) return
			const recipeData = {
				name: result.attributes.name,
				DurationTime: result.attributes.DurationTime,
				PortionSize: result.attributes.PortionSize,
				photo: result.attributes.photo.data.attributes.url,
				ingredients: result.attributes.Ingredients.split('\n'),
				preparation: result.attributes.Preparation.split('\n')
			}

			// const arr2 = result.attributes.Ingredients.split('\n')
			// console.log(arr2)

			setRecipe(recipeData)
			setLoading(false)
		}

		getInitialData()
	}, [id])

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
								{/* <S.ContainerCategories>
									{categories.map((item, index) => (
										<Category
											key={index}
											selected={item.selected}
											name={item.name}
										/>
									))}
								</S.ContainerCategories> */}
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
