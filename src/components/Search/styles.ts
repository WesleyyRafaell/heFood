import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 418px;
	height: 53px;
	background: ${({ theme }) => theme.colors.grayLight};
	border-radius: 20px;
	overflow: hidden;
`
export const BoxIcon = styled.div`
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
	background: ${({ theme }) => theme.colors.primary};

	a {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`

export const Input = styled.input`
	flex: 1;
	background: transparent;
	border: none;
	outline: none;
	font-size: 17.5px;

	::placeholder,
	::-webkit-input-placeholder {
		color: ${({ theme }) => theme.colors.primary};
	}
`
