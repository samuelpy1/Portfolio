export default function Cs() {
  return (
    <div className="relative">
      {/* foi muito dificil fazer isso funciona favor n TOQUE */}
      <div className="relative w-full h-[15rem] bg-gradient-to-b from-black to-gray-900 border-b-black border-b-2">
        <div className="absolute inset-0 z-10 "></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-extrabold text-transparent text-[6rem] bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 animate-pulse">
            Challenge
          </h1>

        </div>
      </div>
      <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 h-1 rounded-full"></div>
  
      {/* conteudo */}
      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-b from-black to-gray-900">
        <div className="flex flex-col lg:flex-row gap-12 my-12 justify-around items-center max-w-screen-lg">
          <section className="text-lg lg:text-2xl flex flex-col justify-evenly text-white space-y-6 lg:max-w-2xl">
            <p className="leading-relaxed">
              O challenge é uma avaliação que se dá ao longo de todo o ano que engloba todas as áreas do conhecimento que os alunos tiveram contato durante o semestre, com duas entregas ao longo do bimestre seu objetivo é testar a habilidade do aluno em desenvolver um projeto voltado a necessidade de uma empresa parceira participante deste projeto.
            </p>
            <p className="leading-relaxed">
              Os alunos desenvolvem um projeto do zero a partir da necessidade apresentada por uma empresa parceira. Os projetos são arquitetados pelos alunos e aos poucos polidos pelos professores, que selecionam as melhores e mais criativas ideias para apresentar aos representantes da empresa participante. 
            </p>
            <p className="leading-relaxed">
              Os três melhores recebem uma premiação e todo o destaque que um pódio pode proporcionar para sua carreira profissional.
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