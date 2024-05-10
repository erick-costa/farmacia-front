import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-md overflow-hidden justify-between shadow">
      <header className="py-2 px-6 bg-green-600 text-white font-bold text-2xl">
        {categoria.nome}
      </header>
      <p className="p-8 text-3xl bg-slate-100 h-full">{categoria.descricao}</p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-green-500 hover:bg-green-700 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria
