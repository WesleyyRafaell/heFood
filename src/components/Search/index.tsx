import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import theme from 'styles/theme'

const Search = () => {
	return (
		<S.Container>
			<S.BoxIcon>
				<FiSearch color={theme.colors.primary} width={50} />
			</S.BoxIcon>
			<S.Input placeholder="Busque uma receita" />
		</S.Container>
	)
}

export default Search
