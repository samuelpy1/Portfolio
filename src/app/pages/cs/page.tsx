export default function Cs() {
  return (
    <div className="relative">
      <div className="relative w-full h-[10rem]"> 
        <div className="absolute inset-0 bg-white z-10"></div> 
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[6rem] bg-clip-text text-red-600">
            Challenge
          </h1> 
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black bg-black">
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <section className="text-lg lg:text-2xl flex flex-col justify-evenly text-white "> {/* Ajuste de tamanho de texto */}
              <p className="mb-20">
              O challenge é uma avaliação que se dá ao longo de todo o ano que engloba todas as áreas do conhecimento que os alunos tiveram contato durante o semestre, com duas entregas ao longo do bimestre seu objetivo é testar a habilidade do aluno em desenvolver um projeto voltado a necessidade de uma empresa parceira participante deste projeto. Os alunos desenvolvem um projeto do zero a partir da necessidade apresentada por uma empresa parceira, os projetos são arquitetados pelos alunos e aos poucos polidos pelos professores que selecionam as melhores e mais criativas ideias para apresentar aos representantes da empresa participante, os três melhores recebem uma premiação e todo o destaque que um pódio podem proporcionar para sua carreira profissional. 
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}