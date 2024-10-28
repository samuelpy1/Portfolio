export default function Checkpoints() {
  return (
    <div className="relative">
      <div className="relative w-full h-[10rem]"> 
        <div className="absolute inset-0 bg-white z-10"></div> 
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[6rem] bg-clip-text text-red-600">
            CheckPoints
          </h1> 
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black bg-black">
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <section className="text-lg lg:text-2xl flex flex-col justify-evenly text-white "> {/* Ajuste de tamanho de texto */}
              <p className="mb-20">
                Os check Points ou popularmente chamado pelos alunos de CP`s é uma prova que é aplicada três vezes ao longo do bimestre. Elas são usadas para testar o conhecimento a curto prazo do aluno, e por esse motivo sei peso na média das matérias é menor.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
