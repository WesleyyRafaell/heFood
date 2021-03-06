import * as S from './styles'
import { Link } from 'react-router-dom'

// components
import Search from 'components/Search'
import Logo from 'components/Logo'

export type HeaderProps = {
	back?: boolean
}

const Header = ({ back }: HeaderProps) => {
	return (
		<S.Container>
			<S.Background />
			<S.Menu>
				<Link to="/">
					<Logo />
				</Link>
				<Search />
				{back && (
					<S.Button>
						<Link to="/"> Home</Link>{' '}
					</S.Button>
				)}
			</S.Menu>
		</S.Container>
	)
}

export default Header
