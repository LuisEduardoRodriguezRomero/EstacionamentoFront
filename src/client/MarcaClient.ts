import axios, { AxiosInstance } from "axios";
import { MarcaModel } from "@/model/MarcaModel";

class MarcaClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<MarcaModel> {
    try {
      return (await this.axiosClient.get<MarcaModel>(`/marca?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAllMarcas(): Promise<MarcaModel[]> {
    try {
      const response = await this.axiosClient.get<MarcaModel[]>(`/marca`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAtivo(): Promise<MarcaModel[]> {
    try {
      return (await this.axiosClient.get<MarcaModel[]>(`/marca/ativos`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(marca: MarcaModel): Promise<void> {
    try {
      return (await this.axiosClient.post(`/marca`, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, marca: MarcaModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/marca/${id}`, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`/marca?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new MarcaClient();
