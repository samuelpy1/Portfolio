"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoAvaliacao } from "@/types";

export default function About({ params }: { params: { nome: string } }) {
  const [avaliacoes, setAvaliacoes] = useState<TipoAvaliacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getAvaliacoesPorPessoa(nome: string) {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/avaliacoes/byname/${nome}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        setAvaliacoes(data);
      } catch (error) {
        console.error('Erro na busca:', error);
        setError('Erro ao carregar as avaliações');
      } finally {
        setLoading(false);
      }
    }

    getAvaliacoesPorPessoa(params.nome);
  }, [params.nome]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <p>{error}</p>
          <Link href="/">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (avaliacoes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl text-gray-600">Nenhuma avaliação encontrada para {params.nome}</p>
          <Link href="/">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-100 to-white p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Avaliações de {avaliacoes[0].nomePessoa}
        </h1>

        <div className="space-y-6">
          {avaliacoes.map((avaliacao) => (
            <div 
              key={avaliacao.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {avaliacao.nomeAvaliacao}
                  </h2>
                  <p className="text-gray-600">
                    Tipo: {avaliacao.tipoAvaliacao}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    Nota: {avaliacao.nota.toFixed(1)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(avaliacao.data).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Feedback</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {avaliacao.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Voltar ao Início
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}