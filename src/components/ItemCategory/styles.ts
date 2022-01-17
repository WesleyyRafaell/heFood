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

const wrapperModifiersResponsive = {
	boxShadow: () => css`
		box-shadow: 5.5px 7px 6.7px #ef436b;
		&::after {
			display: none;
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

	@media (max-width: 714px) {
		min-width: 218px;
		margin-right: 10px;
		${({ selected }) => css`
			${selected && wrapperModifiersResponsive.boxShadow()}
		`}
	}

	@media (max-width: 375px) {
		min-width: 150px;
		height: 110px;
	}
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
