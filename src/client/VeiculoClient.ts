import axios, { AxiosInstance } from "axios";
import { VeiculoModel } from "@/model/VeiculoModel";

export class VeiculoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<VeiculoModel> {
    try {
      return (await this.axiosClient.get<VeiculoModel>(`/veiculo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAllVeiculos(): Promise<VeiculoModel[]> {
    try {
      return (await this.axiosClient.get<VeiculoModel[]>(`/veiculo`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAtivo(): Promise<VeiculoModel[]> {
    try {
      return (await this.axiosClient.get<VeiculoModel[]>(`/veiculo/ativos`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(veiculo: VeiculoModel): Promise<void> {
    try {
      return (await this.axiosClient.post(`/veiculo`, veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, veiculo: VeiculoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/veiculo?id=${id}`, veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`/veiculo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new VeiculoClient();