import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from './styles/theme'

// components
import Home from './pages/home'
import DetailsRecipe from 'pages/DetailsRecipe'
import ResultSearch from 'pages/ResultSearch'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="detailsrecipe/:id" element={<DetailsRecipe />} />
					<Route path="search" element={<ResultSearch />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
