import { TipoAvaliacao } from "@/types";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

// Método GET para buscar uma avaliação específica
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = await context.params.id;
    
    const file = await fs.readFile(
      process.cwd() + "/src/data/base.json",
      "utf-8"
    );

    const avaliacoes: TipoAvaliacao[] = JSON.parse(file);
    const avaliacao = avaliacoes.find((a) => a.id === Number(id));

    if (!avaliacao) {
      return NextResponse.json(
        { error: "Avaliação não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(avaliacao);
  } catch (error) {
    console.error("Erro ao buscar avaliação:", error);
    return NextResponse.json(
      { error: "Erro ao buscar avaliação" },
      { status: 500 }
    );
  }
}

// Método PUT existente
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = await params.id;

    const file = await fs.readFile(
      process.cwd() + "/src/data/base.json",
      "utf-8"
    );

    const avaliacoes: TipoAvaliacao[] = JSON.parse(file);
    const avaliacaoAtualizada = await request.json();

    const index = avaliacoes.findIndex((a) => a.id === Number(id));

    if (index === -1) {
      return NextResponse.json(
        { error: "Avaliação não encontrada" },
        { status: 404 }
      );
    }

    avaliacoes[index] = {
      ...avaliacaoAtualizada,
      id: Number(id),
      data: new Date(avaliacaoAtualizada.data)
    };

    await fs.writeFile(
      process.cwd() + "/src/data/base.json",
      JSON.stringify(avaliacoes, null, 2)
    );

    return NextResponse.json(avaliacoes[index]);
  } catch (error) {
    console.error("Erro ao atualizar avaliação:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar avaliação" },
      { status: 500 }
    );
  }
}

// Método DELETE
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = await params.id;

    const file = await fs.readFile(
      process.cwd() + "/src/data/base.json",
      "utf-8"
    );

    const avaliacoes: TipoAvaliacao[] = JSON.parse(file);

    const indice = avaliacoes.findIndex((a) => a.id == Number(id));

    if (indice != -1) {
      
      avaliacoes.splice(indice, 1);

      const newFile = JSON.stringify(avaliacoes);
      await fs.writeFile(process.cwd() + "/src/data/base.json", newFile);
      return NextResponse.json({msg:"Produto excluído com sucesso."});
    }
  } catch (error) {
    console.error("Falha na exclusão da Avaliação.", error);
    return NextResponse.json({ msg: "Falha no DELETE!" }, { status: 500 });
  }
}