import * as S from './styles'

export type CategoryProps = React.HTMLAttributes<HTMLDivElement> & {
	selected?: boolean
	action?: boolean
	name?: string
}

const Category = ({ selected, name, action, ...rest }: CategoryProps) => {
	return (
		<S.Container selected={selected} action={action} {...rest}>
			<S.BackgroundOverlay>
				<S.Text>{name}</S.Text>
			</S.BackgroundOverlay>
		</S.Container>
	)
}

export default Category
