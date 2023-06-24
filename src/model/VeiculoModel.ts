import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./CorModel";
import { Tipo } from "./TipoModel";
import { ModeloModel } from "./ModeloModel";

export class Veiculo extends AbstractEntity {
  placa!: string;

  cor!: Cor;

  modelo!: ModeloModel;

  tipo!: Tipo;

  ano!: number;

  constructor() {
    super();
    this.ativo = true;
  }
}
