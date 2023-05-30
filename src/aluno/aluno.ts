import { Disciplina } from "../disciplina/disciplina";
import { Pessoa } from "../pessoa/pessoa";

export class Aluno extends Pessoa{
    private _curso: string = "";
    private _situacao: SituacaoAluno = SituacaoAluno.MATRICULADO;
    private _disciplinas: Disciplina[] = [];

    public get curso(): string {
        return this._curso;
    }

    public set curso(value: string) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }

    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

    public get disciplinas(): Disciplina[] {
        return this._disciplinas;
    }

    public set disciplinas(value: Disciplina[]) {
        this._disciplinas = value;
    }

    constructor(
        nome: string,
        sobrenome: string,
        CPF: string,
        idade: number,
        brasileiro: boolean,
        telefone: string,
        sexo: string,
        curso: string,
        situacao: SituacaoAluno
        ) {
        super(nome, sobrenome, CPF, idade, brasileiro, telefone, sexo)
        this.curso = curso;
        this.situacao = situacao;
        this.matricula = this.getMatricula();
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Isso é uma submissão de projeto de pesquísa de aluno`);
    }

    public submeterProjetoExtensao(): void {
        console.log(`Isso é uma submissão de projeto de extensão de aluno`);
    }

    protected getMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000 );
        return Number(`${ano}${numero}`);
    }
}

export enum SituacaoAluno {
    MATRICULADO = "Matriculado",
    ATIVO = "Ativo",
    TRANCADO = "Trancado",
    CANCELADO = "Cancelado",
    CONCLUIDO = "Concluído",
    FORMANDO = "Formando"
}