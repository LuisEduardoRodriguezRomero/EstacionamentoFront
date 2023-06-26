import axios, { AxiosInstance } from "axios";
import { ConfiguracaoModel } from "@/model/ConfiguracaoModel";

export class ConfiguracaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<ConfiguracaoModel> {
    try {
      return (
        await this.axiosClient.get<ConfiguracaoModel>(`/configuracao?id=${id}`)
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }



  public async findAllConfiguracoes(): Promise<ConfiguracaoModel[]> {
    try {
      return (await this.axiosClient.get<ConfiguracaoModel[]>(`/configuracao`))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(configuracao: ConfiguracaoModel): Promise<void> {
    try {
      return (await this.axiosClient.post(`/configuracao`, configuracao)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, configuracao: ConfiguracaoModel): Promise<void> {
    try {
      return (
        await this.axiosClient.put(`/configuracao?id=${id}`, configuracao)
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}


export default new ConfiguracaoClient();