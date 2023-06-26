import { AbstractEntity } from "./abstract-entity";
import { MarcaModel } from "./MarcaModel";

export class ModeloModel extends AbstractEntity {
  nome!: string;

  marca!: MarcaModel;

  cadastro: Date = new Date();

  constructor() {
    super();
    this.ativo = true;
  }
}
