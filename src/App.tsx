import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from './styles/theme'

// components
import Home from './pages/home'
import DetailsRecipe from 'pages/DetailsRecipe'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="detailsrecipe" element={<DetailsRecipe />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
