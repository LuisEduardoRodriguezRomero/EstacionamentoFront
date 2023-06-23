import { AbstractEntity } from "./abstract-entity";
import { MarcaModel } from "./MarcaModel";

export class Modelo extends AbstractEntity {
  nome!: string;

  marca!: MarcaModel;

  constructor() {
    super();
    this.ativo = true;
  }
}
