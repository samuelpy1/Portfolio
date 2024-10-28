import Image from "next/image";
import Idoso from "../../../public/img/immanuel.jpg";
import Livro from "../../../public/img/livro.jpg";
import Velikovsky from "@/public/img/velikas.jpg";

export default function Checkpoints() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50rem]">
        <Image
          src={Idoso}
          alt="Immanuel"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[6rem] bg-clip-text text-indigo-300">
            A História de Immanuel Velikovsky
          </h1>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black to-blue-900">
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <section className="text-lg lg:text-xl flex flex-col justify-evenly text-white ">
              <p className="mb-6">
                O impacto de Immanuel Velikovsky no mundo acadêmico foi profundo e duradouro, embora nem sempre da maneira que ele próprio poderia ter desejado. Sua entrada no cenário intelectual na década de 1950 provocou uma tempestade de controvérsias que reverberou por décadas, influenciando não apenas os campos específicos que ele abordou, mas também levantando questões fundamentais sobre a natureza da ciência, o papel do ceticismo e a relação entre a academia e o público em geral.
              </p>
              <p>
                Quando Velikovsky publicou Worlds in Collision em 1950, o livro caiu como uma bomba no mundo acadêmico. Sua proposta de que eventos catastróficos cósmicos haviam moldado a história recente da Terra e que esses eventos poderiam ser correlacionados com mitos antigos e textos religiosos desafiou não apenas o consenso científico estabelecido, mas também os próprios métodos pelos quais esse consenso era alcançado.
              </p>
            </section>
            <Image src={Velikovsky} alt="Imagem de Immanuel" width={300} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="relative flex flex-col lg:flex-row gap-8 items-center">
            <Image src={Livro} alt="Livro" width={300} height={400} className="rounded-lg shadow-lg" />
            <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
            Sua obra mais famosa
            </p>
            <section className="text-lg lg:text-xl flex flex-col justify-evenly text-white">
              <p>
                O caso Velikovsky também levantou questões importantes sobre interdisciplinaridade na ciência. Velikovsky, com sua formação em medicina e psicanálise, estava propondo teorias que abrangiam astronomia, geologia, arqueologia e mitologia comparada. Sua abordagem desafiou as fronteiras tradicionais entre disciplinas acadêmicas, argumentando que insights significativos poderiam ser obtidos através da síntese de conhecimentos de campos diversos.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}