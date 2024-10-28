import { NextResponse } from "next/server";
import { promises as fs } from "fs";


export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request:Request) {

    const { nome,  } = await request.json();
    
    const dados = { nome, idade };

    return NextResponse.json({dados,msg:"SUCESSO"},{status:201});
}