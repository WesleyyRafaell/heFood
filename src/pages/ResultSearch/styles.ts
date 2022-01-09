import styled from 'styled-components'

export const Container = styled.div``

export const Block = styled.div`
	max-width: 1170px;
	margin: 80px auto;
`
export const Title = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.h3`
	display: inline;
	margin-left: 10px;
	font-size: 23.8px;
	color: #544d4d;
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
`
export const ContainerLoading = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`
