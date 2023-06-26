<script lang="ts">

import { defineComponent } from 'vue';

import MovimentacaoClient from '@/client/MovimentacaoClient';
import {MovimentacaoModel } from '@/model/MovimentacaoModel';

export default defineComponent({
  name: 'MovimentacaoLista',
  data() {
    return {
        movimentacoesList: new Array<MovimentacaoModel>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
   MovimentacaoClient.findAllMovimentacoes()
        .then(sucess => {
          this.movimentacoesList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});

</script>

<template>

  <div class="container" style="margin-top: 10px;">

    <div class="row">
      <div class="col-md-8 text-start"> <p class="fs-3"> Movimentacoes </p> </div>
      <div class="col-md-3"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/movimentacao/formulario">Registrar entrada
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">  
        <table class="table">
          <thead class="table-secondary" >
            <tr>
              <th scope="col">ID</th>
              <th scope="col" class="text-start">Placa</th>
               <th scope="col">Condutor</th>
                <th scope="col">Entrada</th>
                 <th scope="col">Saida</th>
              <th scope="col">Opção</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            
            <tr v-for="item in movimentacoesList" :key="item.id">
              <th class="col-md-1">{{ item.id }}</th>
              <th class="text-start">{{ item.veiculo.placa }}</th>
              <th class="text-start">{{ item.condutor.nome}}</th>
              <th class="text-start">{{ item.entrada }}</th>
              <th class="text-start">{{ item.saida }}</th>

              <th class="col-md-2">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <router-link type="button" class="btn btn-sm btn-warning" 
                      :to="{ name: 'movimentacao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                    Editar 
                  </router-link>
                  <router-link type="button" class="btn btn-sm btn-danger" 
                      :to="{ name: 'movimentacao-formulario-excluir-view', query: { id: item.id, form: 'excluir' } } ">
                    Excluir
                  </router-link>
                </div>
              </th>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
.table-row{
padding: 0.1rem;
}
</style>