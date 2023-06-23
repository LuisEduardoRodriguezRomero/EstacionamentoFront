import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./CorModel";
import { Tipo } from "./TipoModel";
import { Modelo } from "./ModeloModel";

export class Veiculo extends AbstractEntity {
  placa!: string;

  cor!: Cor;

  modelo!: Modelo;

  tipo!: Tipo;

  ano!: number;

  constructor() {
    super();
    this.ativo = true;
  }
}
