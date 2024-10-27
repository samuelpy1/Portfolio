import Image from "next/image";
import Astro from "../../../public/img/astro.jpg";
import crono_hist from "@/public/img/revisao_cronologia_historica.jpg";
import cata_geologico from "@/public/img/catastrofismo_geologico.jpg";
import cata_cosmico from "@/public/img/cataclismos cosmicos.jpg";

export default function Teorias() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50rem]">
        <Image
          src={Astro}
          alt="Espaço com astros"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[4rem] bg-clip-text text-indigo-300">
          Teorias Controversas e Principais Obras
          </h1>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black to-blue-900">
      <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
        <section className="text-lg lg:text-xl flex-1 text-white">
          <p className="mb-6">
          Immanuel Velikovsky é conhecido por suas teorias altamente controversas, que desafiaram os paradigmas científicos em áreas como astronomia, história e geologia. Ele propôs que eventos catastróficos causados por interações cósmicas foram responsáveis por moldar a história humana, criando uma nova narrativa para a origem de mitos e fenômenos naturais.
          </p>
          <p className="mb-6">
            As mais importantes teorias de Velikovsky são:
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-6">
            <Image
              src={cata_cosmico}
              alt="Cataclismos Cósmicos"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="flex-1">
              <p className="font-bold text-lg mb-4">Teoria dos Cataclismos Cósmicos</p>
              <p>
              Velikovsky sugeriu que eventos astronômicos, como aproximações planetárias e deslocamentos de órbitas, provocaram catástrofes na Terra, que foram testemunhadas e registradas por civilizações antigas. Sua principal proposta é que o planeta Vênus teria sido ejetado de Júpiter como um cometa e passou perigosamente perto da Terra, causando grandes desastres naturais, como terremotos, erupções vulcânicas, e dilúvios.

              Ele defendia que esse evento teria ocorrido por volta de 1500 a.C. e que os efeitos desses encontros cósmicos foram registrados em várias mitologias e escrituras antigas, incluindo a Bíblia, textos gregos e mitologias egípcias. Mundos em Colisão, sua obra mais famosa, detalha como essa aproximação de Vênus teria causado pragas no Egito, separação das águas do Mar Vermelho e outros fenômenos descritos no Êxodo bíblico.              
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-6">
            <div className="flex-1">
            <p className="font-bold text-lg mb-4">Revisão da Cronologia Histórica</p>
              <p>
              Uma das teorias centrais de Velikovsky foi sua revisão radical da cronologia histórica, exposta na série de livros Ages in Chaos (Eras em Caos). Ele argumentou que a cronologia tradicional da história antiga estava incorreta, e que eventos descritos em textos de diferentes culturas antigas, como egípcios e israelitas, estavam muito mais conectados no tempo do que se acreditava.

              Velikovsky tentou alinhar eventos históricos do Antigo Testamento com fontes egípcias e de outras culturas, sugerindo que muitos dos cataclismos e acontecimentos que acreditamos ocorrer em diferentes épocas, na verdade, foram os mesmos eventos observados por diferentes povos sob perspectivas culturais diferentes. Ele argumentava que, ao corrigir a cronologia, poderia se obter uma nova compreensão da história antiga.              
              </p>
            </div>
              <Image
                src={crono_hist}
                alt="Revisão da Cronologia Histórica"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-6">
            <Image
              src={cata_geologico}
              alt="Catastrofismo Geológico"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="flex-1">
              <p className="font-bold text-lg mb-4">Catastrofismo Geológico</p>
              <p>
              Velikovsky também acreditava que as grandes mudanças geológicas na Terra ocorreram de forma rápida e catastrófica, e não através de processos lentos e graduais, como sugerido pela teoria do uniformitarianismo. Essa teoria foi detalhada em sua obra Earth in Upheaval (Terra em Convulsão), onde ele apresentou evidências geológicas e paleontológicas que, segundo ele, corroboravam a ideia de que a Terra havia sofrido cataclismos repentinos.

              Ele citava fósseis de animais encontrados em regiões inesperadas, depósitos de sedimentos em lugares elevados e outras anomalias geológicas como prova de que eventos devastadores ocorreram em tempos históricos recentes, não em eras geológicas distantes, como a ciência tradicional sugere.              </p>
            </div>
          </div>
        </section>
      </div>
      </main>
    </div>
  );
}