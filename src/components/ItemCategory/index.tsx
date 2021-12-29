import { returnImage } from 'utils/returnImage'
import * as S from './styles'

export type CategoryProps = React.HTMLAttributes<HTMLDivElement> & {
	selected?: boolean
	action?: boolean
	name: string
	image: string
}

const Category = ({
	selected,
	name,
	action,
	image,
	...rest
}: CategoryProps) => {
	return (
		<S.Container
			selected={selected}
			image={returnImage(image)}
			action={action}
			{...rest}
		>
			<S.BackgroundOverlay>
				<S.Text>{name}</S.Text>
			</S.BackgroundOverlay>
		</S.Container>
	)
}

export default Category
