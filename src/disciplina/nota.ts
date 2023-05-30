export class Nota {
    private _valor: number = 0;
    private _peso: number = 0;
    
    public get valor(): number {
        return this._valor;
    }
    
    public set valor(value: number) {
        this._valor = value;
    }

    public get peso(): number {
        return this._peso;
    }

    public set peso(value: number) {
        this._peso = value;
    }

    constructor(valor: number, peso: number) {
        this.valor = valor;
        this.peso = peso;
    }
}