import * as S from './styles'

// components
import Search from 'components/Search'
import Logo from 'components/Logo'

const Header = () => {
	return (
		<S.Container>
			<S.Background />
			<S.Menu>
				<Logo />
				<Search />
			</S.Menu>
		</S.Container>
	)
}

export default Header
