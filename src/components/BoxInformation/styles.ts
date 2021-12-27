import styled from 'styled-components'

export const Container = styled.div`
	background: #ffffff;
	border: 1px solid #c5c5c5;
	box-sizing: border-box;
	box-shadow: 5px 5px 14px 2px rgb(0 0 0 / 25%);
	border-radius: 60px;
	padding: 42.8px 109px;
	min-height: 320px;
`

export const Title = styled.h3`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 28.6px;
	font-weight: 700;
	text-align: center;
`

export const List = styled.ul`
	padding-top: 40px;
`

export const ItemList = styled.li`
	margin-bottom: 9px;
`
