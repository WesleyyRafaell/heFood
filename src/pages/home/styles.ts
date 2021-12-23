import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
	max-width: 1170px;
	margin: auto;
`

export const ContainerCategories = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(5, 218px);
	gap: 20px;
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
	gap: 20px;
	margin-top: 58px;
`
