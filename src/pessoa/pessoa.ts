import { Endereco } from "../endereco/endereco";

export abstract class Pessoa {
    private _nome: string = "";
    private _sobrenome: string = "";
    private _CPF: string = "";
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _telefone: string = "";
    private _sexo: string = "";
    private _enderecos: Endereco[] = [];
    private _matricula: number = 0;
    private static quantidadePessoas: number = 0;

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }

    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get CPF(): string {
        return this._CPF;
    }

    public set CPF(value: string) {
        let padraCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
		if (padraCPF.test(value)) {
			this._CPF = value;
		}
		else{
			throw Error("CPF Inválido");
		}
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }

    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(value: string) {
        this._telefone = value;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }

    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public get matricula(): number {
        return this._matricula;
    }

    public set matricula(value: number) {
        this._matricula = value;
    }

    constructor(
        nome: string,
        sobrenome: string,
        CPF: string,
        idade: number,
        brasileiro: boolean,
        telefone: string,
        sexo: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.CPF = CPF;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.telefone = telefone;
        this.sexo =  sexo;
        Pessoa.quantidadePessoas++;
    }

    public getNomeCompleto(): string  {
		return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
	}

    public getEndereco(posicao: number): Endereco {
		return this.enderecos[posicao];
	}

    public static getquantidadePessoa(): number {
		return Pessoa.quantidadePessoas;
	}

	protected abstract getMatricula(): number;
}