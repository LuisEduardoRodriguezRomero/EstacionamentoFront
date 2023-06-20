import axios, { AxiosInstance } from "axios";
import { Marca } from "@/model/marca";

export class MarcaClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Marca> {
        try{
            return (await this.axiosClient.get<Marca>(`/marca?id=${id}`)).data;

        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAllMarcas() : Promise<Marca[]> {
        try{
            const response = await this.axiosClient.get<Marca[]>(`/marca/lista`);
           const data = response.data;
           console.log(data)
           return data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Marca[]> {
        try{
            return (await this.axiosClient.get<Marca[]>(`/marca/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(marca : Marca) : Promise<void> {
        try{
            return (await this.axiosClient.post(`/marca`, marca)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, marca : Marca) : Promise<void> {
        try{
            return (await this.axiosClient.put(`/marca?id=${id}`, marca)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<void> {
        try{
            return (await this.axiosClient.delete(`/marca?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}