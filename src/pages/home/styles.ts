import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
	max-width: 1170px;
	margin: auto;
	@media (max-width: 1153px) {
		padding: 0 50px;
	}
	@media (max-width: 360px) {
		padding: 0 10px;
	}
`
export const ContainerCategories = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(5, 218px);
	gap: 50px 20px;
	@media (max-width: 1204px) {
		grid-template-columns: repeat(4, 218px);
	}
	@media (max-width: 938px) {
		grid-template-columns: repeat(3, 218px);
	}
	@media (max-width: 714px) {
		grid-template-columns: auto;
		display: flex;
		overflow-x: scroll;
		height: 140px;
	}

	/* @media (max-width: 375px) {
		min-width: 150px;
		height: 110px;
	} */
`
export const TitleCategory = styled.h2`
	font-size: 39px;
	text-align: center;
	margin-top: 86px;
	color: ${({ theme }) => theme.colors.primary};
`

export const ContainerRecipes = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 276.9px);
	gap: 50px 20px;
	margin-top: 58px;
	@media (max-width: 894px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
export const ContainerLoading = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`
