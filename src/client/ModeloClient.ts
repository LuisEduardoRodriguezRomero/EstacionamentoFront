import axios, { AxiosInstance } from "axios";
import { ModeloModel } from "@/model/ModeloModel";

export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<ModeloModel> {
    try {
      return (await this.axiosClient.get<ModeloModel>(`/modelo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAllModelos(): Promise<ModeloModel[]> {
    try {
      const response = await this.axiosClient.get<ModeloModel[]>(`/modelo`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAtivo(): Promise<ModeloModel[]> {
    try {
      return (await this.axiosClient.get<ModeloModel[]>(`/modelo/ativos`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(modelo: ModeloModel): Promise<void> {
    try {
      return (await this.axiosClient.post(`/modelo`, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, modelo: ModeloModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/modelo?id=${id}`, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`/modelo?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new ModeloClient();