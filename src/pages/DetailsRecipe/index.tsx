import * as S from './styles'
import Header from 'components/Header'
import InformationRecipe from 'components/InformationRecipe'

const DetailsRecipe = () => {
	return (
		<S.Container>
			<Header back />
			<S.Block>
				<InformationRecipe />
			</S.Block>
		</S.Container>
	)
}

export default DetailsRecipe
