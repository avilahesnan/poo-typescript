export class Professor {
    protected getMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
     }
}