import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAvaliacao } from "@/types";
import path from "path";

// ENDPOINT DESTE ARQUIVO:
// http://localhost:3000/api/base-produtos

export async function POST(request: Request) {
  try {
    // Read the existing evaluations from the original JSON file
    const filePath = path.join(process.cwd(), 'public', 'data', 'base.json');
    const file = await fs.readFile(filePath, "utf-8");

    // Parse the existing evaluations
    const avaliacoes: TipoAvaliacao[] = JSON.parse(file);

    // Get the new evaluation from the request
    const avaliacao: TipoAvaliacao = await request.json();

    // Generate a new ID for the new evaluation
    avaliacao.id = avaliacoes[avaliacoes.length - 1].id + 1;

    // Add the new evaluation to the list
    avaliacoes.push(avaliacao);

    // Write the updated list to a temporary file
    const newFilePath = '/tmp/base.json';
    await fs.writeFile(newFilePath, JSON.stringify(avaliacoes, null, 2));

    // Optionally, you can also update the original file
    // await fs.writeFile(filePath, JSON.stringify(avaliacoes, null, 2));

    return NextResponse.json(avaliacao, { status: 201 });
  } catch (error) {
    console.error("Falha na criação de um novo produto.", error);
    return NextResponse.json({ msg: "Falha na criação!" }, { status: 500 });
  }
}
