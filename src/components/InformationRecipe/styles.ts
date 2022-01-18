import styled from 'styled-components'

export const Container = styled.div``

export const TitleCategory = styled.h2`
	font-size: 39px;
	text-align: center;
	margin-top: 86px;
	color: ${({ theme }) => theme.colors.primary};
`
export const ContainerImage = styled.div`
	width: 964px;
	height: 413px;
	background: lightgrey;
	margin: 60px auto 0 auto;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	@media (max-width: 964px) {
		width: 100%;
	}
	@media (max-width: 576px) {
		height: auto;
	}
`

export const Image = styled.img`
	width: 100%;
`
export const ContainerBoxInfo = styled.div`
	width: 448px;
	height: 110px;
	box-shadow: 5px 5px 14px 2px rgb(0 0 0 / 25%);
	border-radius: 60px;
	background: #fff;
	border: 1px solid #c5c5c5;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px auto 0 auto;
	@media (max-width: 576px) {
		flex-direction: column;
		width: 80%;
		height: 150px;
	}
`

export const BoxInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Icon = styled.img``

export const Separator = styled.img`
	height: 80px;
	@media (max-width: 576px) {
		width: 110px;
		height: 1px;
	}
`

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 15px;
	font-weight: 700;
`
