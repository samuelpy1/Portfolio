import Image from "next/image";
import Livro from "../../../public/img/livro.jpg";
import Velikovsky from "@/public/img/velikas.jpg";
import Livro2 from "@/public/img/livro2.jpg";
import Livro3 from "@/public/img/livro3.jpg";
import Immanuel from "@/public/img/immanuel2.jpeg";
import Immanuel2 from "@/public/img/immanuel3.jpg";

export default function Legado() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50rem]">
        <Image
          src={Immanuel2}
          alt="Immanuel"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[4rem] bg-clip-text text-indigo-300">
            As ideias e o legado de Immanuel Velikovsky
          </h1>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black to-blue-900">
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <section className="text-lg lg:text-xl flex-1 text-white">
            <p className="mb-6">
              O legado intelectual de Immanuel Velikovsky é marcado por uma
              série de obras controversas que desafiaram o pensamento
              científico convencional e provocaram intensos debates tanto na
              comunidade acadêmica quanto entre o público em geral. Suas
              ideias, embora amplamente rejeitadas pela ciência mainstream,
              tiveram um impacto duradouro em certos círculos e continuam a
              ser objeto de discussão até os dias atuais. Vamos explorar em
              detalhes suas obras mais conhecidas e a recepção que elas
              receberam. "Worlds in Collision", publicado em 1950, é sem dúvida
              a obra mais famosa e influente de Velikovsky. Este livro
              apresentou sua teoria mais audaciosa e controversa: a ideia de
              que, em tempos históricos recentes, grandes catástrofes de
              origem cósmica afetaram a Terra e outros planetas do sistema
              solar. Velikovsky propôs que Vênus era originalmente um cometa,
              ejetado de Júpiter, que passou perto da Terra várias vezes,
              causando cataclismos globais. Ele argumentou que esses eventos
              estavam registrados em mitos antigos, lendas e textos religiosos
              de várias culturas ao redor do mundo.A recepção de "Worlds in
              Collision" foi tumultuada e polarizadora. Por um lado, o livro
              se tornou um best-seller instantâneo, capturando a imaginação do
              público geral com suas teorias dramáticas e sua narrativa
              envolvente. Velikovsky tinha um estilo de escrita cativante e
              uma habilidade para tecer conexões intrigantes entre mitos
              antigos e fenômenos naturais, o que tornou seu trabalho
              acessível e fascinante para leitores não especializados.
            </p>
            <p>
              Por outro lado, a reação da comunidade científica foi
              esmagadoramente negativa. Astrônomos, geólogos e outros
              cientistas criticaram duramente o livro, apontando numerosas
              falhas em suas premissas básicas e metodologia. Eles
              argumentaram que as teorias de Velikovsky violavam leis
              fundamentais da física e ignoravam uma vasta quantidade de
              evidências científicas estabelecidas. A controvérsia atingiu tal
              ponto que alguns cientistas pressionaram a editora Macmillan a
              deixar de publicar o livro, uma ação que gerou debates sobre
              liberdade acadêmica e censura.Apesar (ou talvez por causa) da
              controvérsia, "Worlds in Collision" estabeleceu Velikovsky como
              uma figura de culto em certos círculos. Ele ganhou seguidores
              dedicados que viam seu trabalho como uma revelação
              revolucionária, desafiando o que percebiam como dogmatismo na
              ciência estabelecida. Esta dinâmica entre rejeição acadêmica e
              popularidade pública se tornaria uma característica definidora
              da carreira de Velikovsky.Seguindo o sucesso controverso de
              Worlds in Collision, Velikovsky publicou Ages in Chaos em 1952.
              Este livro focou na história antiga, particularmente na
              cronologia do Egito e do Oriente Próximo. Velikovsky propôs uma
              revisão radical da cronologia aceita, argumentando que havia um
              erro de cerca de 600 anos na datação convencional da história
              egípcia.
            </p>
          </section>

          <div className="flex flex-col gap-8 items-center">
            <Image
              src={Velikovsky}
              alt="Imagem de Immanuel"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src={Immanuel}
              alt="Imagem de Immanuel"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src={Immanuel2}
              alt="Imagem de Immanuel"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="flex flex-col gap-8 items-center">
            <Image
              src={Livro}
              alt="Livro"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src={Livro2}
              alt="Livro"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src={Livro3}
              alt="Livro"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <section className="text-lg lg:text-xl flex-1 text-white">
            <p>
              A tese central de Ages in Chaos era que o período do Êxodo
              bíblico coincidia com o fim do Império Médio do Egito, e não com
              o Novo Império como geralmente aceito. Velikovsky tentou
              correlacionar eventos descritos na Bíblia com registros
              egípcios, propondo identificações controversas entre figuras
              históricas e bíblicas. Por exemplo, ele sugeriu que a rainha
              Hatshepsut era a mesma pessoa que a Rainha de Sabá mencionada na
              Bíblia.A recepção de "Ages in Chaos" entre historiadores e
              arqueólogos foi predominantemente negativa. Especialistas em
              história antiga criticaram a metodologia de Velikovsky,
              argumentando que ele selecionava evidências de forma seletiva
              para apoiar suas teorias, ignorando uma vasta quantidade de
              dados arqueológicos e históricos que contradiziam suas
              propostas. Muitos viram seu trabalho como uma tentativa mal
              fundamentada de validar narrativas bíblicas através de uma
              reinterpretação forçada da história egípcia.No entanto, assim
              como "Worlds in Collision", "Ages in Chaos" encontrou um público
              receptivo entre leitores fascinados por interpretações
              alternativas da história. O livro alimentou debates sobre a
              precisão da cronologia histórica aceita e inspirou alguns
              pesquisadores marginais a explorarem revisões da história
              antiga.Em 1955, Velikovsky publicou "Earth in Upheaval", uma
              obra que buscava fornecer evidências geológicas para apoiar as
              teorias catastróficas apresentadas em "Worlds in Collision".
              Neste livro, ele argumentou que o registro geológico mostrava
              sinais de catástrofes globais repentinas, em oposição ao
              gradualismo que dominava o pensamento geológico da
              época.
            </p>
            <br />
            <p>
              Velikovsky apresentou uma série de observações geológicas que
              ele acreditava serem evidências de eventos catastróficos
              recentes, incluindo camadas de cinzas vulcânicas, depósitos de
              fósseis e formações rochosas incomuns. Ele argumentou que estas
              evidências apoiavam sua teoria de catástrofes cósmicas e
              questionavam os princípios do uniformitarismo geológico.A
              recepção de "Earth in Upheaval" na comunidade geológica foi,
              mais uma vez, amplamente negativa. Geólogos criticaram
              Velikovsky por interpretar erroneamente evidências geológicas e
              ignorar décadas de pesquisa que explicavam satisfatoriamente os
              fenômenos que ele descrevia. Muitos viram o livro como um
              exemplo de pensamento pseudocientífico, onde observações
              seletivas eram usadas para apoiar conclusões pré-determinadas.No
              entanto, é interessante notar que, nas décadas seguintes à
              publicação de "Earth in Upheaval", houve um aumento no interesse
              científico por eventos catastróficos na história da Terra, como
              impactos de asteroides. Embora isso não tenha validado as
              teorias específicas de Velikovsky, demonstrou uma maior abertura
              na geologia para considerar o papel de eventos dramáticos ao
              lado de processos graduais."Oedipus and Akhnaton", publicado em
              1960, representou uma mudança de foco para Velikovsky,
              explorando conexões entre mito e história. Neste livro, ele
              propôs que a lenda grega de Édipo era baseada na vida do faraó
              egípcio Akhenaton. Velikovsky argumentou que detalhes da
              história de Édipo, incluindo o enigma da Esfinge e o casamento
              com a própria mãe, tinham paralelos na vida de Akhenaton e nas
              práticas da corte egípcia.A recepção deste livro foi mista. <br /> <br />
              Alguns estudiosos de mitologia e literatura comparada acharam as
              conexões propostas por Velikovsky intrigantes, mesmo que
              especulativas. No entanto, egiptólogos e classicistas geralmente
              rejeitaram suas teorias, argumentando que elas se baseavam em
              interpretações forçadas e ignoravam diferenças culturais e
              temporais significativas entre o Egito antigo e a Grécia
              clássica.Além dessas obras principais, Velikovsky continuou a
              publicar livros e artigos expandindo suas teorias até o fim de
              sua vida. Obras como "Peoples of the Sea" (1977) e "Ramses II
              and His Time" (1978) continuaram sua revisão da cronologia
              antiga, enquanto "Mankind in Amnesia" (1982, publicado
              postumamente) explorou as implicações psicológicas de suas
              teorias de catástrofes cósmicas.A recepção geral das obras de
              Velikovsky seguiu um padrão consistente ao longo de sua
              carreira. Na comunidade científica e acadêmica mainstream, suas
              ideias foram amplamente rejeitadas como pseudocientíficas.
              Críticos argumentavam que Velikovsky ignorava evidências
              estabelecidas, fazia uso seletivo de fontes e propunha teorias
              que violavam princípios físicos fundamentais.No entanto, entre o
              público geral e em certos círculos intelectuais alternativos, as
              ideias de Velikovsky encontraram uma recepção mais calorosa.
              Seus livros continuaram a vender bem e a inspirar debates.
              Alguns viram em seu trabalho uma crítica necessária ao que
              percebiam como dogmatismo na ciência estabelecida. Outros foram
              atraídos pela natureza interdisciplinar de suas teorias, que
              pareciam oferecer uma síntese grandiosa de história, mitologia e
              ciência.O legado das obras de Velikovsky é complexo. Embora suas
              teorias específicas tenham sido amplamente desacreditadas, o
              debate que elas geraram teve impactos duradouros. Suas ideias
              influenciaram movimentos de pensamento alternativo e continuam a
              ser discutidas em certos círculos. Além disso, a controvérsia em
              torno de seu trabalho levantou questões importantes sobre como a
              ciência lida com teorias não convencionais e como o conhecimento
              científico é comunicado ao público.Em retrospectiva, as obras de
              Velikovsky podem ser vistas como um caso de estudo fascinante na
              história da ciência e da cultura popular do século XX. Elas
              ilustram o poder duradouro de narrativas que desafiam o
              pensamento convencional, mesmo quando rejeitadas pelo consenso
              científico. A recepção mista de suas ideias - rejeitadas pela
              academia, mas abraçadas por parte do público - destaca as
              complexidades da relação entre ciência, mídia e sociedade, temas
              que continuam relevantes até hoje.
            </p>
            <p>Sua obra mais famosa</p>
          </section>
        </div>
      </main>
    </div>
  );
}