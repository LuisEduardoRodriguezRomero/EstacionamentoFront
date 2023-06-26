<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar Configuracoes</p> </div>
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
        <label class="form-label">Valor Minutor*</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.valor">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Valor Minuto Multa*</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.minuto">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Vagas Carro*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagascarro">
      </div>
    </div>

      <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Vagas Moto*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagasmoto">
      </div>


    </div>
      <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Vagas Van*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="configuracao.vagasvan">
      </div>
    </div>
     


    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/movimentacao/lista">Voltar
          </router-link>
        </div>
      </div>



      <div class="col-md-3 "> 
        <div class="d-grid gap-2">
          <button v-if="this.form === undefined" type="button" 
              class="btn btn-success" @click="onClickCadastrar()">
            Registrar entrada 
          </button>


          <button v-if="this.form === 'editar'" type="button" 
              class="btn btn-warning" @click="onClickEditar()">
            Editar Movimentacao
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

import ConfiguracaoClient from '@/client/ConfiguracaoClient';
import { ConfiguracaoModel } from '@/model/ConfiguracaoModel';


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConfiguracaoFormulario',
  data() {
    return { 
      configuracao: new ConfiguracaoModel(),
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
      ConfiguracaoClient.cadastrar(this.configuracao)
        .then(sucess => {
          this.configuracao = new ConfiguracaoModel()
          
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
      ConfiguracaoClient.findById(id)
        .then(sucess => {
          this.configuracao = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
     ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
        .then(sucess => {
          this.configuracao = new ConfiguracaoModel()
          
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
      ConfiguracaoClient.excluir(this.configuracao.id)
        .then(sucess => {
          this.configuracao = new ConfiguracaooModel()
          
          this.$router.push({ name: 'configuracao-lista-view' });
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