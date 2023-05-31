import { Pessoa } from "../pessoa/pessoa";

export class Professor extends Pessoa{
    private _salario: number = 0;
    
    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    constructor(
        nome: string,
        sobrenome: string,
        CPF: string,
        idade: number,
        brasileiro: boolean,
        telefone: string,
        sexo: string,
        salario: number
    ) {
        super(nome, sobrenome, CPF, idade, brasileiro, telefone, sexo)
        this.salario = salario;
        this.matricula = this.getMatricula();
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Isso é uma submissão de projeto de pesquísa de professor`);
    }

    public submeterProjetoExtensao(): void {
        console.log(`Isso é uma submissão de projeto de extensão de professor`);
    }

    protected getMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
     } 
}