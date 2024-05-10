function Home() {
  return (
    <>
      <div className="bg-green-600 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Boas vindas!</h2>
            <p className="text-xl">Veja nossos produtos e medicamentos</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-black py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://www.crfmg.org.br/site/uploads/img-principal/20180905[152310]gt.png"
              alt=""
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
