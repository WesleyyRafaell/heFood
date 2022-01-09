import * as S from './styles'
import { Link } from 'react-router-dom'

import { returnImage } from 'utils/returnImage'

// imgs
import time from 'imgs/food.png'
import food from 'imgs/food.png'

export type CardRecipeProps = {
	idItem: number
	title: string
	minutes: number
	portions: number
	photo?: string
}

const CardRecipe = ({
	idItem,
	title,
	minutes,
	portions,
	photo
}: CardRecipeProps) => {
	return (
		<Link to={`/detailsrecipe/${idItem}`}>
			<S.Container>
				<S.Title>{title}</S.Title>
				<S.Box>
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
					{photo && <S.Image src={returnImage(photo)} />}
				</S.Box>
			</S.Container>
		</Link>
	)
}

export default CardRecipe
