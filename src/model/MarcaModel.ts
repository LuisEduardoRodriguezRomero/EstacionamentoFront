import { AbstractEntity } from "./abstract-entity";

export class MarcaModel extends AbstractEntity {
    nome !: string;

    constructor() {
        super()
        this.ativo = true
    }
}