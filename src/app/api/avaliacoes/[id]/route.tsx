// src/app/pages/apod/[id]/page.tsx
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { TipoAvaliacao } from "@/types";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  }
}

export default function EditarAvaliacao({ params }: PageProps) {
  const router = useRouter();
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
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchAvaliacao() {
      try {

        const response = await fetch(`/api/avaliacoes/${params.id}`);
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

    if (params.id) {
      fetchAvaliacao();
    }
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      const response = await fetch(`/api/avaliacoes/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...avaliacao,
          data: avaliacao.data.toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao salvar as alterações');
      }

      router.push('/');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setError('Erro ao salvar as alterações');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAvaliacao(prev => ({
      ...prev,
      [name]: name === 'nota' 
        ? parseFloat(value)
        : name === 'data' 
        ? new Date(value)
        : value
    }));
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
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Editar Avaliação
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Pessoa
              </label>
              <input
                type="text"
                name="nomePessoa"
                value={avaliacao.nomePessoa}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Avaliação
              </label>
              <input
                type="text"
                name="nomeAvaliacao"
                value={avaliacao.nomeAvaliacao}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Avaliação
              </label>
              <select
                name="tipoAvaliacao"
                value={avaliacao.tipoAvaliacao}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="GS">GS</option>
                <option value="CP">CP</option>
                <option value="CHALLENGE">CHALLENGE</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nota
              </label>
              <input
                type="number"
                name="nota"
                value={avaliacao.nota}
                onChange={handleChange}
                min="0"
                max="10"
                step="0.1"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data
              </label>
              <input
                type="date"
                name="data"
                value={avaliacao.data.toISOString().split('T')[0]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feedback
              </label>
              <textarea
                name="feedback"
                value={avaliacao.feedback}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link href="/">
              <button
                type="button"
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
            </Link>
            <button
              type="submit"
              disabled={saving}
              className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors
                ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {saving ? (
                <div className="flex items-center">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Salvando...
                </div>
              ) : (
                'Salvar Alterações'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

