import * as S from './styles'
import { Link } from 'react-router-dom'

// imgs
import time from 'imgs/food.png'
import food from 'imgs/food.png'

export type CardRecipeProps = {
	title: string
	minutes: number
	portions: number
}

const CardRecipe = ({ title, minutes, portions }: CardRecipeProps) => {
	return (
		<Link to="detailsrecipe">
			<S.Container>
				<S.Box>
					<S.Title>{title}</S.Title>
					<S.ContainerDetails>
						<S.BoxDetails>
							<S.Icon src={time} />
							<S.Text> {minutes} min</S.Text>
						</S.BoxDetails>
						<S.BoxDetails>
							<S.Icon src={food} />
							<S.Text>
								{portions === 1 ? `${portions} porção` : `${portions} porções`}
							</S.Text>
						</S.BoxDetails>
					</S.ContainerDetails>
				</S.Box>
				<S.Image src="https://s1.static.brasilescola.uol.com.br/be/2020/10/alimentacao-saudavel.jpg" />
			</S.Container>
		</Link>
	)
}

export default CardRecipe
