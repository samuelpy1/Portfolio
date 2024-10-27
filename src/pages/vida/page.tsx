import Image from "next/image";
import Esposa from "../../../public/img/immanuel-velikovsky.jpg";
import Veli from "@/public/img/immveli.jpg";

export default function Vida() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50rem]">
        <Image
          src={Esposa}
          alt="Immanuel e sua esposa"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-center font-bold text-[4rem] bg-clip-text text-indigo-300">
            A Vida Pessoal de Immanuel Velikovsky
          </h1>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black to-blue-900">
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center max-w-screen-lg">
          <div className="flex flex-col gap-8 items-center">
            <Image src={Veli} alt="Imagem de Immanuel" width={300} height={400} className="rounded-lg shadow-lg" />
          </div>
            <section className="text-lg lg:text-xl flex-1 text-white">
              <p className="mb-6">
              Immanuel Velikovsky nasceu em 10 de junho de 1895, em Vitebsk, no então Império Russo (hoje Belarus). Ele cresceu em uma família judia culta e de classe média, o que lhe proporcionou uma educação sólida desde jovem. Seus pais, Shimon Velikovsky e Beila Grodensky Velikovsky, eram conhecidos por sua inteligência e dedicação à educação dos filhos. Durante sua juventude, Velikovsky estudou em várias cidades europeias, como Berlim e Montpellier, onde foi exposto a uma ampla gama de ideias intelectuais e científicas.

              Velikovsky concluiu seus estudos de medicina na Universidade de Moscou em 1921, logo após a Revolução Russa. Ele migrou para a Alemanha, onde conheceu e se casou com Elisheva Kramer, uma pianista e musicóloga. O casal mais tarde se estabeleceu na Palestina, que na época estava sob o mandato britânico. Lá, Velikovsky combinou sua carreira como médico com um crescente interesse por história, mitologia e ciências.              </p>
              <p>
              A partir de 1939, Velikovsky se mudou com sua família para os Estados Unidos, onde começou a desenvolver suas teorias mais polêmicas. Ele ficou conhecido principalmente por seu livro Mundos em Colisão (1950), onde sugeriu que eventos catastróficos no sistema solar, especialmente envolvendo o planeta Vênus, influenciaram profundamente a história da Terra. Suas ideias controversas, que desafiavam a ciência convencional, fizeram dele uma figura amplamente debatida.

              Apesar da controvérsia, Velikovsky manteve uma vida pessoal tranquila, dedicando-se à sua família e ao desenvolvimento de suas teorias. Ele e sua esposa tiveram duas filhas, Shulamit e Ruth. Ao longo de sua vida, Velikovsky manteve correspondências com cientistas e intelectuais, tentando buscar apoio e compreensão para suas ideias.

              Velikovsky continuou a escrever e desenvolver suas teorias até sua morte, em 17 de novembro de 1979, aos 84 anos, em Princeton, Nova Jersey.
              </p>
            </section>
        </div>
      </main>
    </div>
  );
}