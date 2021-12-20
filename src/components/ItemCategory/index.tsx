import * as S from './styles'

export type CategoryProps = React.HTMLAttributes<HTMLDivElement> & {
	selected?: boolean
	name?: string
}

const Category = ({ selected, name, ...rest }: CategoryProps) => {
	return (
		<S.Container selected={selected} {...rest}>
			<S.BackgroundOverlay>
				<S.Text>{name}</S.Text>
			</S.BackgroundOverlay>
		</S.Container>
	)
}

export default Category
