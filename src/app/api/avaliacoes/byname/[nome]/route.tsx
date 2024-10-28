import { client } from "@/lib/appwrite_client"; // Certifique-se de que o módulo 'appwrite' está corretamente importado.
import { TipoAvaliacao } from "@/types";
import { Databases, Query } from 'appwrite';
import { NextResponse } from "next/server";

const database = new Databases(client);

export async function GET(request: Request, { params }: { params: { nome: string } }) {
  try {
    // Primeiro, obtemos os documentos do banco de dados.
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
      [Query.orderAsc("$createdAt")]
    );

    // Se você precisar filtrar as avaliações baseadas no nome, faça isso aqui.
    const combinedAvaliacoes: TipoAvaliacao[] = response.documents; // Supondo que você tenha esse array de avaliações
    const avaliacoes: TipoAvaliacao[] = combinedAvaliacoes.filter(
      (p) => p.nomePessoa === params.nome
    );

    return NextResponse.json(avaliacoes);
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    return NextResponse.json(
      { error: "Erro ao buscar avaliações: " + error },
      { status: 500 }
    );
  }
}
