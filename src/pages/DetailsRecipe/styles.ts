import styled from 'styled-components'

export const Container = styled.div``

export const Block = styled.div`
	max-width: 1170px;
	margin: 80px auto;
	padding: 0 30px;
`
export const ContainerCategories = styled.div`
	margin-top: 74.8px;
	@media (max-width: 576px) {
		text-align: center;
	}
`

export const TitleCategories = styled.h4`
	margin-bottom: 20px;
	color: ${({ theme }) => theme.colors.primary};
	@media (max-width: 576px) {
		font-size: 21.6px;
	}
`

export const BoxCategories = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 218px);
	gap: 20px;
	@media (max-width: 576px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export const ContainerPreparation = styled.div`
	margin-top: 169px;
	@media (max-width: 484px) {
		margin-top: 60px;
	}
`
export const BoxPreparation = styled.div`
	margin-bottom: 80px;
	@media (max-width: 484px) {
		margin-bottom: 40px;
	}
`
export const ContainerLoading = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`
