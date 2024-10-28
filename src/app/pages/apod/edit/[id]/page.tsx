// src/app/pages/apod/[nome]/page.tsx
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoAvaliacao } from "@/types";

interface PageProps {
  params: {
    nome: string;
  }
}

export default function ListaAvaliacoes({ params }: PageProps) {
  const [avaliacao, setAvaliacao] = useState<TipoAvaliacao>({
    data: new Date(),
    feedback: "",
    nomeAvaliacao: "",
    nomePessoa: "",
    nota: 0,
    id: 0,
    tipoAvaliacao: "GS"
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAvaliacao() {
      try {
        setLoading(true);
        const response = await fetch(`/api/avaliacoes/${params.nome}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        setAvaliacao({
          ...data,
          data: new Date(data.data)
        });
      } catch (error) {
        console.error('Erro na busca:', error);
        setError('Erro ao carregar a avaliação');
      } finally {
        setLoading(false);
      }
    }

    if (params.nome) {
      fetchAvaliacao();
    }
  }, [params.nome]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-100 to-white p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Detalhes da Avaliação
        </h1>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {avaliacao.nomeAvaliacao}
              </h2>
              <p className="text-gray-600 mt-1">
                Aluno: {avaliacao.nomePessoa}
              </p>
              <p className="text-gray-600">
                Tipo: {avaliacao.tipoAvaliacao}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                Nota: {avaliacao.nota.toFixed(1)}
              </div>
              <p className="text-sm text-gray-500">
                {avaliacao.data.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Feedback</h3>
            <p className="text-gray-600 whitespace-pre-line">{avaliacao.feedback}</p>
          </div>
          
          <div className="mt-6 flex justify-end space-x-4">
            <Link href="/">
              <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
                Voltar
              </button>
            </Link>
            <Link href={`/pages/apod/edit/${avaliacao.id}`}>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                Editar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}