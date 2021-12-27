import * as S from './styles'

export type BoxInformationProps = {
	title: string
}

const BoxInformation = ({ title }: BoxInformationProps) => {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.List>
				<S.ItemList>1 ovo</S.ItemList>
				<S.ItemList>1 xícara (chá) de aveia em flocos</S.ItemList>
				<S.ItemList>1 fio de azeite</S.ItemList>
				<S.ItemList>
					1 pitada de sal (ou pode substituir por uma colher de mel caso queira
					doce)
				</S.ItemList>

				<S.ItemList>2 colheres (sopa) de água</S.ItemList>
			</S.List>
		</S.Container>
	)
}

export default BoxInformation
