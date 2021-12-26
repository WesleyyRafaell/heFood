import styled from 'styled-components'
import img from '../../imgs/bg-header.jpg'

export const Container = styled.div``

export const Background = styled.div`
	width: 100%;
	height: 304px;
	background: url(${img});
`

export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	max-width: 1170px;
	margin: -40px auto 0 auto;
`
export const Button = styled.button`
	background: ${({ theme }) => theme.colors.secondary};
	border: none;
	border-radius: 20px;
	font-size: 20px;
	cursor: pointer;

	a {
		width: 225px;
		height: 42px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
`
