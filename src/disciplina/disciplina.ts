import { Nota } from "./nota";

export class Disciplina {
    private _nome: string = "";
    private _cargahoraria: number = 0;
    private _notas: Nota[] = [];
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get cargahoraria(): number {
        return this._cargahoraria;
    }
    public set cargahoraria(value: number) {
        this._cargahoraria = value;
    }

    public get notas(): Nota[] {
        return this._notas;
    }
    public set notas(value: Nota[]) {
        this._notas = value;
    }

    constructor(nome: string, cargaHoraria: number) {
        this.nome = nome;
        this.cargahoraria = cargaHoraria;
    }

    public getMediaAritmetica(): number {
        let soma: number = 0;
        let mediaA: number = 0;
        this.notas.forEach(nota => {
            soma += nota.valor;
        });
        return mediaA = soma / this.notas.length;
    }

    public getMediaPonderada(): number {
        let soma: number = 0;
        let somapesos: number = 0;
        let mediaP: number = 0;
        this.notas.forEach(nota => {
            soma += nota.valor * nota.peso;
            somapesos += nota.peso;
        });
        return mediaP = soma / somapesos;
    }
}