import * as S from './styles'

// imgs
import time from 'imgs/food.png'
import food from 'imgs/food.png'

const CardRecipe = () => {
	return (
		<S.Container>
			<S.Box>
				<S.Title>Massa fit</S.Title>
				<S.ContainerDetails>
					<S.BoxDetails>
						<S.Icon src={time} />
						<S.Text>15 min</S.Text>
					</S.BoxDetails>
					<S.BoxDetails>
						<S.Icon src={food} />
						<S.Text>5 porcoes</S.Text>
					</S.BoxDetails>
				</S.ContainerDetails>
			</S.Box>
			<S.Image src="https://s1.static.brasilescola.uol.com.br/be/2020/10/alimentacao-saudavel.jpg" />
		</S.Container>
	)
}

export default CardRecipe
