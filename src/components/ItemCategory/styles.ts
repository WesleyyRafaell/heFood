import styled, { css, DefaultTheme } from 'styled-components'

type ContainerProps = {
	selected?: boolean
	action?: boolean
	image: string
}

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

export const Container = styled.div<ContainerProps>`
	width: 218px;
	height: 140px;
	background: url(${({ image }) => image}) center center/cover;
	cursor: ${({ action }) => (action ? 'pointer' : '')};

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
