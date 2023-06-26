import { AbstractEntity } from "./abstract-entity";

export class ConfiguracaoModel extends AbstractEntity {
  vagasVan!: number;

  vagasCarro!: number;

  vagasMoto!: number;

  horarioFecha!: Date;

  valorMinuto!: number;

  valorMultaMinuto!: number;

  tempoParaDesconto!: number;

  tempoDesconto!: number;

  gerarDesconto!: boolean;

  cadastro: Date = new Date();

  constructor() {
    super();
    this.ativo = true;
  }
}