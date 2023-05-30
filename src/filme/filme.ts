export class Filme {
    private _nome: string = "";
    private _lancamento: number = 0;
    private _faixaEtaria: number = 0;

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get lancamento(): number {
        return this._lancamento;
    }

    public set lancamento(value: number) {
        this._lancamento = value;
    }

    public get faixaEtaria(): number {
        return this._faixaEtaria;
    }

    public set faixaEtaria(value: number) {
        this._faixaEtaria = value;
    }

    constructor(nome: string, lancamento: number, faixaEtaria: number) {
        this.nome = nome;
        this.lancamento = lancamento;
        this.faixaEtaria = faixaEtaria;
    }

    public getAnoLancamento(): string {
        let ano: number = new Date().getFullYear();
        if(ano > this.lancamento) {
            return (`Esse filme foi lançado no ano ${this.lancamento}`);
        }
        else if(ano < this.lancamento){
            return (`Esse filme será lançado no ano ${this.lancamento}`);
        }
        else {
            return (`Esse é o ano de lançamento`);
        }
    }

    public getFaixaEtaria(idade: number): string {
        if(idade >= this.faixaEtaria) {
            return (`Você tem permissão para assistir esse filme`);
        }
        else {
            return (`Você não tem permissão para assistir esse filme`);
        }
    }
}