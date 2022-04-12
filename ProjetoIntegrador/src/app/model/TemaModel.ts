import { PostagemModel } from "./PostagemModel";

export class TemaModel{
    public id: number;
    public descricao: string;
    public tipo: string;
    public tag: string;
    public postagem: PostagemModel[]
}