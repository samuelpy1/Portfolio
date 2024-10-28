import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAvaliacao } from "@/types";


export async function GET(
    request: Request,
    { params }: { params: { nome: string } }
  ) {
    const file = await fs.readFile(
      process.cwd() + "/src/data/base.json",
      "utf-8"
    );
    const dados: TipoAvaliacao[] = JSON.parse(file);
  
    const avaliacoes: TipoAvaliacao[] = dados.filter((p) => p.nomePessoa == params.nome);
  
    return NextResponse.json(avaliacoes);
  }
  