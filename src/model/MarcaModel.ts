import { AbstractEntity } from "./abstract-entity";

export class MarcaModel extends AbstractEntity {
    nome !: string;
    cadastro: Date = new Date;

    constructor() {
        super()
        this.ativo = true
    }
}