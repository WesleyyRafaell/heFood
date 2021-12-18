import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 418px;
	height: 53px;
	background: ${({ theme }) => theme.colors.grayLight};
	border-radius: 20px;
`
export const BoxIcon = styled.div`
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
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
