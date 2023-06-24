import axios, { AxiosInstance } from "axios";
import { CondutorModel } from "@/model/CondutorModel";

export class CondutorClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<CondutorModel> {
    try {
      return (await this.axiosClient.get<CondutorModel>(`/condutor?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAllCondutores(): Promise<CondutorModel[]> {
    try {
      const response = await this.axiosClient.get<CondutorModel[]>(`/condutor`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAtivo(): Promise<CondutorModel[]> {
    try {
      return (await this.axiosClient.get<CondutorModel[]>(`/condutor/ativos`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(condutor: CondutorModel): Promise<void> {
    try {
      return (await this.axiosClient.post(`/condutor`, condutor)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, condutor: CondutorModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/condutor?id=${id}`, condutor)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`/condutor?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}


export default new CondutorClient();