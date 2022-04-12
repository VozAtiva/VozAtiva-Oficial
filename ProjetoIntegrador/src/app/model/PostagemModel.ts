import { UsuarioModel } from './UsuarioModel';

import { TemaModel } from "./TemaModel";

export class PostagemModel{
    public id: number;
    public titulo: string;
    public texto: string;
    public imagem: string;
    public tema: TemaModel;
    public usuario: UsuarioModel;
}