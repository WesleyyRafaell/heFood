import * as S from './styles'
import img from 'imgs/bg-header.jpg'

// components
import Search from 'components/Search'
import Logo from 'components/Logo'

const Home = () => {
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

export default Home
