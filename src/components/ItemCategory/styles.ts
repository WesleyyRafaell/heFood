import styled, { css, DefaultTheme } from 'styled-components'
import { CategoryProps } from '.'

const img =
	'https://diaonline.ig.com.br/wp-content/uploads/2020/03/comida-natural-anapolis_capa-e1583930288656-1024x650.jpg'

const wrapperModifiers = {
	lineBottom: (theme: DefaultTheme) => css`
		&::after {
			content: '';
			border-bottom: ${() => `0.5rem solid ${theme.colors.secondary}`};
			display: block;
			margin-top: 10px;
			border-radius: 20px;
			width: 80%;
			margin: 10px auto 0 auto;
		}
	`
}

export const Container = styled.div<CategoryProps>`
	width: 218px;
	height: 140px;
	background: url(${img}) center center/cover;
	cursor: pointer;

	${({ selected, theme }) => css`
		${selected && wrapperModifiers.lineBottom(theme)}
	`}
`

export const BackgroundOverlay = styled.div`
	display: flex;
	align-items: flex-end;
	height: 100%;
	padding-bottom: 24.3px;
	padding-left: 10px;
	background: linear-gradient(15deg, #323232, transparent);
`
export const Text = styled.p`
	color: #fff;
	font-size: 24.3px;
	font-weight: 500;
`
