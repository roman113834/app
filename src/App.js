import React from "react"
import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Home } from "./pages/home"

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
		<Footer />
	</>
)

export default App
