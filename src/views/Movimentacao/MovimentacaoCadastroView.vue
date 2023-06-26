<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Registrar entrada</p> </div>
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
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.id">
      </div>
    </div>


    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Placa *</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.placa">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Condutor*</label>
        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.condutor">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Entrada*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.entrada">
      </div>
    </div>

      <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Saida*</label>
        <input type="datetime" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="movimentacao.saida">
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

import MovimentacaoClient from '@/client/MovimentacaoClient';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';
import { ModeloModel } from '@/model/ModeloModel';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovimentacaoFormulario',
  data() {
    return { 
      movimentacao: new MovimentacaoModel(),
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
      MovimentacaoClient.cadastrar(this.movimentacao)
        .then(sucess => {
          this.movimentacao = new MovimentacaoModel()
          
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
      MovimentacaoClient.findById(id)
        .then(sucess => {
          this.movimentacao = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
     MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
        .then(sucess => {
          this.movimentacao = new MovimentacaoModel()
          
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
      MovimentacaoClient.excluir(this.movimentacao.id)
        .then(sucess => {
          this.movimentacao = new MovimentacaoModel()
          
          this.$router.push({ name: 'movimentacao-lista-view' });
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