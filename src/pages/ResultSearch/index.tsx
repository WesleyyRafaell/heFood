import * as S from './styles'
import { useQuery } from 'Hooks/useQuery'
import { useEffect, useState } from 'react'
import { searchRecipe } from 'services/recipe.service'

// components
import Header from 'components/Header'
import CardRecipe from 'components/CardRecipe'
import Loading from 'components/Loading'

type Recipe = {
	id: number
	attributes: {
		name: string
		DurationTime: number
		PortionSize: number
	}
}

const ResultSearch = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([])
	const [loading, setLoading] = useState(false)
	const query = useQuery()
	const newQuery = query.get('search')

	useEffect(() => {
		const handleSearch = async () => {
			setLoading(true)

			if (!newQuery) return

			const result = await searchRecipe(newQuery)
			setRecipes(result)
			setLoading(false)
		}

		handleSearch()
	}, [newQuery])

	return (
		<S.Container>
			<Header />
			<S.Block>
				<S.Title>
					Termo pesquisado: <S.Text>{query.get('search')}</S.Text>
				</S.Title>
				{loading ? (
					<S.ContainerLoading>
						<Loading />
					</S.ContainerLoading>
				) : (
					<>
						{recipes.length === 0 ? (
							<S.ContainerMessage>
								<S.Text>Nenhum resultado encontrado :(</S.Text>
							</S.ContainerMessage>
						) : (
							<S.ContainerRecipes>
								{recipes.map(({ id, attributes }) => (
									<CardRecipe
										key={id}
										idItem={id}
										title={attributes.name}
										minutes={attributes.DurationTime}
										portions={attributes.PortionSize}
									/>
								))}
							</S.ContainerRecipes>
						)}
					</>
				)}
			</S.Block>
		</S.Container>
	)
}

export default ResultSearch
