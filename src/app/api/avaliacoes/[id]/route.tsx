import { TipoAvaliacao } from "@/types";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Método GET para buscar uma avaliação específica
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const baseFilePath = path.join(process.cwd(), 'public', 'data', 'base.json');
    const tempFilePath = path.join('/tmp', 'temp.json');

    // Read base file
    const baseFile = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION as string, [Query.orderAsc("$createdAt")]);
    ;
    const avaliacoesBase: TipoAvaliacao[] = JSON.parse(baseFile);
    let avaliacao = avaliacoesBase.find((a) => a.id === Number(id));

    // If not found in base file, check temporary file
    if (!avaliacao) {
      try {
        const tempFile = await fs.readFile(tempFilePath, "utf-8");
        const avaliacoesTemp: TipoAvaliacao[] = JSON.parse(tempFile);
        avaliacao = avaliacoesTemp.find((a) => a.id === Number(id));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (tempError) {
        console.warn("Temporary file not found, continuing with base file only.");
      }
    }

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

// Método DELETE
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const filePath = path.join(process.cwd(), 'public', 'data', 'base.json');
    const tempFilePath = path.join(process.cwd(), 'public', 'data', 'temp.json');

    const file = await fs.readFile(filePath, "utf-8");
    const avaliacoes: TipoAvaliacao[] = JSON.parse(file);

    const indice = avaliacoes.findIndex((a) => a.id === Number(id));

    if (indice === -1) {
      return NextResponse.json(
        { error: "Avaliação não encontrada" },
        { status: 404 }
      );
    }

    avaliacoes.splice(indice, 1);

    // Write to a temporary file
    await fs.writeFile(tempFilePath, JSON.stringify(avaliacoes, null, 2));

    // Replace original file with temporary file
    await fs.rename(tempFilePath, filePath);

    return NextResponse.json({ msg: "Avaliação excluída com sucesso." });
  } catch (error) {
    console.error("Falha na exclusão da Avaliação.", error);
    return NextResponse.json({ msg: "Falha no DELETE!" }, { status: 500 });
  }
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const filePath = path.join(process.cwd(), 'public', 'data', 'base.json');
    const tempFilePath = path.join(process.cwd(), 'public', 'data', 'temp.json');

    const file = await fs.readFile(filePath, "utf-8");
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

    // Write to a temporary file
    await fs.writeFile(tempFilePath, JSON.stringify(avaliacoes, null, 2));

    // Replace original file with temporary file
    await fs.rename(tempFilePath, filePath);

    return NextResponse.json(avaliacoes[index]);
  } catch (error) {
    console.error("Erro ao atualizar avaliação:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar avaliação" },
      { status: 500 }
    );
  }
}