export default function Gs() {
  return (
    <div className="relative">
      {/* foi muito dificil fazer isso funciona favor n TOQUE */}
      <div className="relative w-full h-[15rem] bg-gradient-to-b from-black to-gray-900 border-b-black border-b-2">
        <div className="absolute inset-0 z-10 "></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-extrabold text-transparent text-[6rem] bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 animate-pulse">
          Global Solution
          </h1>

        </div>
      </div>
      <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 h-1 rounded-full"></div>
  
      {/* conteudo */}
      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-b from-black to-gray-900">
        <div className="flex flex-col lg:flex-row gap-12 my-12 justify-around items-center max-w-screen-lg">
          <section className="text-lg lg:text-2xl flex flex-col justify-evenly text-white space-y-6 lg:max-w-2xl">
            <p className="leading-relaxed">
              A Global Solution é um programa da FIAP que proporciona aos alunos uma experiência prática de desenvolvimento de projetos em parceria com empresas reais. O desafio, é uma avaliação que engloba diversas áreas do conhecimento e ocorre ao longo do ano letivo.
            </p>
            <p className="leading-relaxed">
              Os alunos desenvolvem projetos do zero, com base nas necessidades de empresas parceiras, aplicando o conhecimento teórico aprendido. Com orientação dos professores, as melhores ideias são selecionadas para apresentação aos representantes das empresas.
            </p>
            <p className="leading-relaxed">
              Os três melhores projetos são premiados, proporcionando reconhecimento e oportunidades de networking que são essenciais para o desenvolvimento profissional dos alunos.
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