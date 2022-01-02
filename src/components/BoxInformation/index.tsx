import * as S from './styles'

export type BoxInformationProps = {
	title: string
	itens: string[]
}

const BoxInformation = ({ title, itens }: BoxInformationProps) => {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.List>
				{itens.map((item, index) => (
					<S.ItemList key={index}>{item}</S.ItemList>
				))}
			</S.List>
		</S.Container>
	)
}

export default BoxInformation
