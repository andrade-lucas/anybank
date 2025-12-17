import { nanoid } from "nanoid";

export class Transacao {
    readonly id = nanoid();

    constructor(
        public readonly tipo: TipoTransacao,
        public readonly valor: number
    ) {}
}

export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
}
