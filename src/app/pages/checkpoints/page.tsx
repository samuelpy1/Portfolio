export default function Checkpoints() {
  return (
    <div className="relative">
      {/* foi muito dificil fazer isso funciona favor n TOQUE */}
      <div className="relative w-full h-[15rem] bg-gradient-to-b from-black to-gray-900 border-b-black border-b-2">
        <div className="absolute inset-0 z-10 "></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-extrabold text-transparent text-[6rem] bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 animate-pulse">
            CheckPoints
          </h1>

        </div>
      </div>
      <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 h-1 rounded-full"></div>
  
      {/* conteudo */}
      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-b from-black to-gray-900">
        <div className="flex flex-col lg:flex-row gap-12 my-12 justify-around items-center max-w-screen-lg">
          <section className="text-lg lg:text-2xl flex flex-col justify-evenly text-white space-y-6 lg:max-w-2xl">
            <p className="leading-relaxed">
              Os Checkpoints da FIAP são etapas de avaliação que visam monitorar o progresso dos alunos ao longo do semestre. Esse sistema permite que os estudantes recebam feedback constante sobre seu desempenho, ajudando a identificar áreas que necessitam de mais atenção e desenvolvimento.
            </p>
            <p className="leading-relaxed">
              Durante os Checkpoints, os alunos apresentam os avanços de seus projetos e as soluções propostas para os desafios enfrentados. Essa prática estimula a reflexão crítica e o aprendizado contínuo, além de fomentar a interação entre os alunos e os professores, que fornecem orientações e sugestões valiosas.
            </p>
            <p className="leading-relaxed">
              Ao final de cada ciclo de Checkpoints, os alunos são avaliados com base em critérios objetivos e subjetivos, o que proporciona um entendimento claro de seu desempenho. Essa metodologia não só prepara os alunos para as exigências do mercado de trabalho, mas também contribui para um aprendizado mais efetivo e integrado.
            </p>
          </section>

  
          {/* se a gente for por alguma imagem/grafico */}
          <div className="w-full lg:w-96 h-96 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-tr from-red-500 to-yellow-500 animate-gradient-rotate">
            <div className="w-full h-full flex justify-center items-center text-white font-bold text-2xl bg-opacity-25">
              <span className="animate-bounce">Imagem/Gráfico</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
