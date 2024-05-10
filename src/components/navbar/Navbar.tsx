import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full bg-green-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmácia</div>

          <div className="flex gap-4">
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria">
              <div className="hover:underline">Cadastrar categoria</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
