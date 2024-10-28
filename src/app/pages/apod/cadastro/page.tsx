"use client";

import { TipoAvaliacao } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadAvaliacao() {
  const navigate = useRouter();

  const [avaliacao, setAvaliacao] = useState<TipoAvaliacao>({
    id: 0,
    nomePessoa: "",
    nomeAvaliacao: "",
    tipoAvaliacao: "",
    data: new Date(),
    nota: 0,
    feedback: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Convert nota to a number if the field is 'nota'
    const newValue = name === "nota" ? Number(value) : value;

    setAvaliacao({ ...avaliacao, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add validation to check if nota is a valid number
    if (isNaN(avaliacao.nota) || avaliacao.nota < 0 || avaliacao.nota > 10) {
      alert("Por favor, insira uma nota válida entre 0 e 10.");
      return;
    }

    try {
      const response = await fetch("/api/avaliacoes/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao),
      });

      if (response.ok) {
        alert("Avaliação foi cadastrada com sucesso!");
        // Reset the form to its initial state
        setAvaliacao({
          id: 0,
          nomePessoa: "",
          nomeAvaliacao: "",
          tipoAvaliacao: "",
          data: new Date(),
          nota: 0,
          feedback: "",
        });
        navigate.push("/");
      } else {
        alert("Falha ao cadastrar a avaliação.");
      }
    } catch (error) {
      console.error("Falha no cadastro da avaliação: ", error);
      navigate.push("/erro");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-100 to-white p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cadastrar Avaliação</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nome da Pessoa:</label>
            <input
              type="text"
              name="nomePessoa"
              value={avaliacao.nomePessoa}
              placeholder="Digite o nome da pessoa."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nome da Avaliação:</label>
            <input
              type="text"
              name="nomeAvaliacao"
              value={avaliacao.nomeAvaliacao}
              placeholder="Digite o nome da avaliação."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Tipo de Avaliação:</label>
            <input
              type="text"
              name="tipoAvaliacao"
              value={avaliacao.tipoAvaliacao}
              placeholder="Digite o tipo de avaliação."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Data:</label>
            <input
              type="date"
              name="data"
              value={avaliacao.data.toISOString().substring(0, 10)}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nota:</label>
            <input
              type="number"
              name="nota"
              value={avaliacao.nota}
              placeholder="Digite a nota da avaliação."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
              min={0}
              max={10}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Feedback:</label>
            <textarea
              name="feedback"
              value={avaliacao.feedback}
              placeholder="Digite o feedback."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
