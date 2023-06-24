import { AbstractEntity } from "./abstract-entity";

export class CondutorModel extends AbstractEntity {
    nome !: string;

    cpf !: string;

    telefone !: string;
    
    tempoPago !: number;

    tempoDesconto !: number;

    constructor() {
        super()
        this.ativo = true
    }
}