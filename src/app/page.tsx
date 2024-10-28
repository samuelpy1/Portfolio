"use client";
import Image from "next/image";
import { alunos } from "./alunos";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative">
    <div className="relative w-full h-[15rem] bg-gradient-to-b from-black to-gray-900 border-b-black border-b-2">
      <div className="absolute inset-0 z-10 "></div>
      <div className="relative z-20 flex justify-center items-center h-full">
        <h1 className="text-center font-extrabold text-transparent text-[6rem] bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 animate-pulse">
          Lista de Alunos
        </h1>

      </div>
    </div>
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 h-1 rounded-full"></div>

    <main className="flex flex-col justify-center items-center p-6 bg-gradient-to-b from-black to-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {alunos.map((aluno, index) => (
            <div key={index} className="bg-gradient-to-tr from-red-600 to-pink-500 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg mr-4">
                  <Image
                    src={aluno.Foto}
                    alt={aluno.nomeEstudante}
                    className="object-cover w-full h-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">{aluno.nomeEstudante}</h2>
                  <p className="text-gray-700">Turma: {aluno.Turma}</p>
                  <p className="text-gray-700">RM: {aluno.RM}</p>
                </div>
              </div>
              <section className="space-y-2">
                <h3 className="font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">Avaliações</h3>
                <div className="flex space-x-2">
                  <Link href="pages/apod/cadastro" className="bg-teal-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 shadow-lg hover:bg-teal-600">
                    Adicionar
                  </Link>
                  <Link href={`pages/apod/${aluno.nomeEstudante}`} className="bg-teal-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 shadow-lg hover:bg-teal-600">
                    Ver todas
                  </Link>
                </div>
              </section>
            </div>
          ))}
        </div>
      
    </main>
    </div>
  );
}


