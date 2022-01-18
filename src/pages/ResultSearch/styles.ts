import styled from 'styled-components'

export const Container = styled.div``

export const Block = styled.div`
	max-width: 1170px;
	margin: 80px auto;
	@media (max-width: 1143px) {
		padding: 0 50px;
	}
	@media (max-width: 630px) {
		text-align: center;
	}
`
export const Title = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primary};
	@media (max-width: 630px) {
		font-size: 21.9px;
	}
`

export const Text = styled.h3`
	display: inline;
	margin-left: 10px;
	font-size: 23.8px;
	color: #544d4d;
	@media (max-width: 630px) {
		display: block;
		font-size: 20px;
	}
`
export const ContainerMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 210px;
`
export const ContainerRecipes = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 276.9px);
	gap: 20px;
	margin-top: 58px;
	@media (max-width: 1192px) {
		grid-template-columns: repeat(3, 276.9px);
	}
	@media (max-width: 936px) {
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
