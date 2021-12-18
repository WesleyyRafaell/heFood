import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

import GlobalStyles from 'styles/global'

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
