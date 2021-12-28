import styled from 'styled-components'

export const Container = styled.div`
	width: 276.9px;
	border: 1px solid #bcbcbc;
	border-radius: 8.1px;
	display: flex;
	align-items: flex-start;
	padding: 10px 13.5px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
`

export const Box = styled.div`
	display: flex;
	margin-top: 20px;
`

export const Title = styled.p`
	font-size: 19px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 700;
`

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 15px;
	font-weight: 700;
`

export const ContainerDetails = styled.div`
	display: flex;
	margin-top: 9.9px;
`

export const BoxDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 21.5px;
`

export const Icon = styled.img``

export const Image = styled.img`
	width: 83px;
	border-radius: 5px;
`
