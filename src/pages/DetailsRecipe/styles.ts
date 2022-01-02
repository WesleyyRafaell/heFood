import styled from 'styled-components'

export const Container = styled.div``

export const Block = styled.div`
	max-width: 1170px;
	margin: 80px auto;
`
export const ContainerCategories = styled.div`
	margin-top: 74.8px;
`

export const TitleCategories = styled.h4`
	margin-bottom: 20px;
	color: ${({ theme }) => theme.colors.primary};
`

export const BoxCategories = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 218px);
	gap: 20px;
`

export const ContainerPreparation = styled.div`
	margin-top: 169px;
`
export const BoxPreparation = styled.div`
	margin-bottom: 80px;
`
export const ContainerLoading = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`
