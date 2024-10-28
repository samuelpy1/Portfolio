import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAvaliacao } from "@/types";


export async function GET(
    request: Request,
    { params }: { params: Promise<{ nome: string }> }
  ) {
    const resolvedParams = await params;
    const file = await fs.readFile(
      process.cwd() + "/public/data/base.json",
      "utf-8"
    );
    const dados: TipoAvaliacao[] = JSON.parse(file);
  
    const avaliacoes: TipoAvaliacao[] = dados.filter((p) => p.nomePessoa == resolvedParams.nome);
  
    return NextResponse.json(avaliacoes);
  }
  