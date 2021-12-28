import styled, { keyframes } from 'styled-components'
import theme from 'styles/theme'

const spin = keyframes`
	from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Container = styled.div`
	border: 10px solid #e7cccc;
	border-radius: 50%;
	border-top: 10px solid ${theme.colors.secondary};
	width: 80px;
	height: 80px;
	animation: ${spin} 2s linear infinite;
`
