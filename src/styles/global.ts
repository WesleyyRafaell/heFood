import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
	}

	body {
		font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
	}
`
export default GlobalStyles
