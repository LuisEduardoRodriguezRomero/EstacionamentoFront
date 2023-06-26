import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./CorModel";
import { Tipo } from "./TipoModel";
import { ModeloModel } from "./ModeloModel";

export class VeiculoModel extends AbstractEntity {
  placa!: string;

  cor!: Cor;

  modeloId!: ModeloModel;

  tipo!: Tipo;

  ano!: number;

  constructor() {
    super();
    this.ativo = true;
  }
}
