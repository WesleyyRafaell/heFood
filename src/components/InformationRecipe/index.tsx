import * as S from './styles'

import food from 'imgs/food.png'
import time from 'imgs/time.png'
import separate from 'imgs/separate.png'

export type InformationRecipeProps = {
	title: string
	minutes: number
	portions: number
}

const InformationRecipe = ({
	title,
	minutes,
	portions
}: InformationRecipeProps) => {
	return (
		<S.Container>
			<S.TitleCategory>{title}</S.TitleCategory>
			<S.ContainerImage>
				<S.Image src="https://media.discordapp.net/attachments/855429663677087805/924670608619483196/image_3.jpg?width=964&height=413" />
			</S.ContainerImage>
			<S.ContainerBoxInfo>
				<S.BoxInfo>
					<S.Icon src={food} />
					<S.Text>{minutes} min</S.Text>
				</S.BoxInfo>
				<S.Separator src={separate} />
				<S.BoxInfo>
					<S.Icon src={time} />
					<S.Text>
						{portions === 1 ? `${portions} porção` : `${portions} porções`}
					</S.Text>
				</S.BoxInfo>
			</S.ContainerBoxInfo>
		</S.Container>
	)
}

export default InformationRecipe
