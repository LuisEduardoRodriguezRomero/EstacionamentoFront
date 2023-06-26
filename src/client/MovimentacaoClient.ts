import axios, { AxiosInstance } from "axios";
import { MovimentacaoModel } from "@/model/MovimentacaoModel";

export class MovimentacaoClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<MovimentacaoModel> {
        try{
            return (await this.axiosClient.get<MovimentacaoModel>(`/movimentacao?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAllMovimentacoes() : Promise<MovimentacaoModel[]> {
        try{
            return (await this.axiosClient.get<MovimentacaoModel[]>(`/movimentacao`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<MovimentacaoModel[]> {
        try{
            return (await this.axiosClient.get<MovimentacaoModel[]>(`/movimentacao/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(movimentacao : MovimentacaoModel) : Promise<void> {
        try{
            return (await this.axiosClient.post(`/movimentacao`, movimentacao)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, movimentacao : MovimentacaoModel) : Promise<void> {
        try{
            return (await this.axiosClient.put(`/movimentacao?id=${id}`, movimentacao)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<void> {
        try{
            return (await this.axiosClient.delete(`/movimentacao?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}


export default new MovimentacaoClient();