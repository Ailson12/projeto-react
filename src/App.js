import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Produtos from "./Components/produtos/Produtos"
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"
import Contato from "./Components/contato/Contato"
import Produto from "./Components/produto/Produto"

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Produtos />} />
						<Route path="/produto/:id" element={<Produto />} />
						<Route path="contato" element={<Contato />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
