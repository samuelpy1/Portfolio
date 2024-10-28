// page.tsx
"use client";
import Image from "next/image";
import { alunos } from "./alunos";


export default function Home() {
  return (
    <main>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        {alunos.map((aluno, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                <Image
                  src={aluno.Foto}
                  alt={aluno.nomeEstudante}
                  className="object-cover w-full h-full"
                  width={100}
                  height={100}
                />
                </div>
              <div>
                <h2 className="text-xl font-semibold">{aluno.nomeEstudante}</h2>
                <p className="text-gray-600">Turma: {aluno.Turma}</p>
                <p className="text-gray-600">RM: {aluno.RM}</p>
              </div>
            </div>

            <section className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-bold mb-2">Personal Checkpoints</h3>
                {/* Substitua pelos dados reais, se necessário */}
                <p>CPS: -</p>
                <p>GS: -</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-bold mb-2">Main Contenders</h3>
                <Link href="pages/apod/cadastro" className="bg-blue-500 text-white px-4 py-2 rounded m-2"> Add New </Link>
                <Link href={`pages/apod/${aluno.nomeEstudante}`} className="bg-blue-500 text-white px-4 py-2 rounded"> View All </Link>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-bold mb-2">Checkpoints</h3>
                {/* Substitua pelos dados reais, se necessário */}
                <p>Checkpoints avg: -</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="font-bold mb-2">Challenger Sprints</h3>
                <ul>
                  {/* Substitua pelos dados reais, se necessário */}
                  <li>Sprint 1</li>
                  <li>Sprint 2</li>
                  <li>Sprint 3</li>
                </ul>
              </div>
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}
