import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAvaliacao } from "@/types";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ nome: string }> }
) {
  const resolvedParams = await params;

  try {
    // Read the original file
    const filePath = path.join(process.cwd(), 'public', 'data', 'base.json');
    const originalFile = await fs.readFile(filePath, "utf-8");
    const dados: TipoAvaliacao[] = JSON.parse(originalFile);

    // Initialize an array for combined results
    let combinedAvaliacoes: TipoAvaliacao[] = [...dados];

    // Read from /tmp if it exists
    const tmpFilePath = '/tmp/base.json';
    try {
      const tmpFile = await fs.readFile(tmpFilePath, "utf-8");
      const tmpDados: TipoAvaliacao[] = JSON.parse(tmpFile);
      combinedAvaliacoes = [...combinedAvaliacoes, ...tmpDados];
    } catch (error) {
      // Ignore errors if the tmp file doesn't exist
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        console.error("Erro ao ler o arquivo temporário:", error);
      }
    }

    // Filter evaluations based on the provided name
    const avaliacoes: TipoAvaliacao[] = combinedAvaliacoes.filter(
      (p) => p.nomePessoa === resolvedParams.nome
    );

    return NextResponse.json(avaliacoes);
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    return NextResponse.json(
      { error: "Erro ao buscar avaliações" },
      { status: 500 }
    );
  }
}
