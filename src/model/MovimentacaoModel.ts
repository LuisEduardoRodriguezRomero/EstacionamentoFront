import { AbstractEntity } from "./abstract-entity";
import { VeiculoModel } from "./VeiculoModel";
import { CondutorModel } from "./CondutorModel";

export class MovimentacaoModel extends AbstractEntity {
  entrada: Date = new Date();;

  saida!: Date;

  tempo!: number;

  tempoMulta!: number;

  tempoDesconto!: number;

  veiculo!: VeiculoModel;

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
