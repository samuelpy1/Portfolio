import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAvaliacao } from "@/types";

//ENDPOINT DESTE ARQUIVO:
//http://localhost:3000/api/base-produtos

export async function POST(request:Request) {

    try {
        //Recuperação da lista de produtos que está em um arquivo .json e colocamos em uma constante. 
        const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

        //A lista vem no formato de string, para podermos manipular ela, devemos converter em objeto.
        const avaliacoes:TipoAvaliacao[] = JSON.parse(file);

        //Recuperar o  objeto que chegou no request e tipar ele, para podermos posteriormente adicionar um novo ID e guardar na lista.
        const avaliacao:TipoAvaliacao = await request.json();

        //Gerando um novo ID para o novo produto.
        avaliacao.id = avaliacoes[avaliacoes.length - 1].id+1;

        //Adicionamos o novo produto na lista.
        avaliacoes.push(avaliacao);

        //Vamos converter a lista para string/JSONpara podermos devolver ela no arquivo .json.
        const newFile = JSON.stringify(avaliacoes);

        //Finalmente podemos utilizar o fs para escrever ou guardar a lista no arquivo e sobrepor as antigas informações.
        await fs.writeFile(process.cwd() + "/src/data/base.json", newFile);
        
        return NextResponse.json(avaliacao,{status:201})

    } catch (error) {
        console.error("Falha na criação de um novo produto.", error);
        return NextResponse.json({msg:"Falha na criação!"},{status:500});
    }
}