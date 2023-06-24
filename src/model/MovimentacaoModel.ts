import { AbstractEntity } from "./abstract-entity";
import { Veiculo } from "./VeiculoModel";
import { CondutorModel } from "./CondutorModel";

export class Movimentacao extends AbstractEntity {
  entrada!: Date;

  saida!: Date;

  tempo!: number;

  tempoMulta!: number;

  tempoDesconto!: number;

  veiculo!: Veiculo;

  condutor!: CondutorModel;

  valor!: number;

  valorMulta!: number;

  valorDesconto!: number;

  valorTotal!: number;

  constructor() {
    super();
    this.ativo = true;
  }
}
