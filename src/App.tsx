import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias"
import FormCategoria from "./components/categorias/formCategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
