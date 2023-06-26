<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar de Veiculo </p> </div>
      <div class="col-md-2"> </div>
    </div>

    <hr/>

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>


<div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">id *</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.id">
      </div>
    </div>


    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Placa *</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.placa">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Modelo*</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.modelo">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Cor*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.cor">
      </div>
    </div>

      <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Tipo*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.tipo">
      </div>
    </div>

      <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Ano*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="veiculo.ano">
      </div>
    </div>


  


    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/veiculo/lista">Voltar
          </router-link>
        </div>
      </div>



      <div class="col-md-3 "> 
        <div class="d-grid gap-2">
          <button v-if="this.form === undefined" type="button" 
              class="btn btn-success" @click="onClickCadastrar()">
            Cadastrar 
          </button>


          <button v-if="this.form === 'editar'" type="button" 
              class="btn btn-warning" @click="onClickEditar()">
            Editar Veiculo
          </button>



          <button v-if="this.form === 'excluir'" type="button" 
              class="btn btn-danger" @click="onClickExcluir()">
            Excluir 
          </button>



        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import VeiculoClient from '@/client/VeiculoClient';
import { VeiculoModel } from '@/model/VeiculoModel';
import { ModeloModel } from '@/model/ModeloModel';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VeiculoFormulario',
  data() {
    return { 
      veiculo: new VeiculoModel(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        marca: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    }
  },
  mounted() { 

    if(this.id !== undefined){
      this.findById(Number(this.id));
    }


  },
  methods: {

    onClickCadastrar(){
      VeiculoClient.cadastrar(this.veiculo)
        .then(sucess => {
          this.veiculo = new VeiculoModel()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
        
    },
    findById(id: number){
      VeiculoClient.findById(id)
        .then(sucess => {
          this.marca = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      VeiculoClient.editar(this.veiculo.id, this.veiculo)
        .then(sucess => {
          this.veiculo = new VeiculoModel()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      VeiculoClient.excluir(this.veiculo.id)
        .then(sucess => {
          this.veiculo = new VeiculoModel()
          
          this.$router.push({ name: 'veiculo-lista-view' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
});

</script>