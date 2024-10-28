import Image from "next/image";
import Livro from "../../../public/img/livro.jpg";
import Velikovsky from "@/public/img/velikas.jpg";
import Livro2 from "@/public/img/livro2.jpg";
import Livro3 from "@/public/img/livro3.jpg";
import Immanuel from "@/public/img/immanuel2.jpeg";
import Immanuel2 from "@/public/img/immanuel3.jpg";

export default function Gs() {
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
              O 
            </p>
            <p>
              Por
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
              A 
              época.
            </p>
            <br />
            <p>
              Velikovsky apresentou uma série de observações geológicas que
              ele acreditava serem evidências de eventos catastróficos
              recentes, incluindo camadas de cinzas vulcânicas, depósitos de
              fósseis e fo
            </p>
            <p>Sua obra mais famosa</p>
          </section>
        </div>
      </main>
    </div>
  );
}