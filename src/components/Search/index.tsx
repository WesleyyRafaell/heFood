import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import theme from 'styles/theme'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
	const [search, setSearch] = useState('')

	return (
		<S.Container>
			<S.BoxIcon onClick={() => setSearch('')}>
				<Link
					to={{
						pathname: '/search',
						search: `?search=${search}`
					}}
				>
					<FiSearch color={theme.colors.white} />
				</Link>
			</S.BoxIcon>
			<S.Input
				placeholder="Busque uma receita"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
		</S.Container>
	)
}

export default Search
