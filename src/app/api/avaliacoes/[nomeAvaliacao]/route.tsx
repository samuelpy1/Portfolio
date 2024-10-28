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
  
    const avaliacoes = dados.find((p) => p.nomePessoa == params.nome);
  
    return NextResponse.json(avaliacoes);
  }
  
  export async function PUT(
    request: Request,
    { params }: { params: { id: number } }
  ) {
    try {
      const file = await fs.readFile(
        process.cwd() + "/src/data/base.json",
        "utf-8"
      );
  
      const avaliacoes: TipoAvaliacao[] = JSON.parse(file);
  
      const { id, nomePessoa, nomeAvaliacao, tipoAvaliacao,  data, feedback, nota } = await request.json();

      const indice = avaliacoes.findIndex((p) => p.id == params.id);
  
      if (indice != -1) {
        const avaliacao = { id, nomePessoa, nomeAvaliacao, data, tipoAvaliacao, feedback, nota } as TipoAvaliacao;
        avaliacao.id = params.id;
  
        avaliacao.splice(indice, 1, avaliacoes);
        const newFile = JSON.stringify(avaliacoes);
  
        //Finalmente podemos utilizar o fs para escrever ou guardar a lista no arquivo e sobrepor as antigas informações.
        await fs.writeFile(process.cwd() + "/src/data/base.json", newFile);
  
        return NextResponse.json({msg:"Produto atualizado com sucesso."});
      }
    } catch (error) {
      console.error("Falha na atualização do produto.", error);
      return NextResponse.json({ msg: "Falha no UPDATE!" }, { status: 500 });
    }
  }
  
  
  export async function DELETE(
      request: Request,
      { params }: { params: { id: number } }
    ) {
      try {
        const file = await fs.readFile(
          process.cwd() + "/src/data/base.json",
          "utf-8"
        );
    
        //A lista vem no formato de string, para podermos manipular ela, devemos converter em objeto.
        const produtos: TipoProduto[] = JSON.parse(file);
    
        //Verificando a existência do produto através do ID passado.
        //Se os IDs derem match, recebemos o retorno de um indice válido, caso contrário recebemos -1.
        const indice = produtos.findIndex((p) => p.id == params.id);
    
        //Verificar se o indice é válido:
        if (indice != -1) {
          
          //Removendo o objeto da lista utilizando o indice passado.
          produtos.splice(indice, 1);
    
          //Vamos converter a lista para string/JSONpara podermos devolver ela no arquivo .json.
          const newFile = JSON.stringify(produtos);
    
          //Finalmente podemos utilizar o fs para escrever ou guardar a lista no arquivo e sobrepor as antigas informações.
          await fs.writeFile(process.cwd() + "/src/data/base.json", newFile);
    
          return NextResponse.json({msg:"Produto excluído com sucesso."});
        }
      } catch (error) {
        console.error("Falha na exclusão do produto.", error);
        return NextResponse.json({ msg: "Falha no DELETE!" }, { status: 500 });
      }
    }
    