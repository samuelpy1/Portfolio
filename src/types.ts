import { StaticImageData } from "next/image";

export type TipoAvaliacao = {
    id: number,
    nomePessoa: string,
    nomeAvaliacao: string,
    tipoAvaliacao: string, 
    data: Date, 
    nota: number, 
    feedback: string, 
}
export type Estudante = {
    nomeEstudante: string;
    Turma: string;
    RM: number;
    Foto: StaticImageData;
}