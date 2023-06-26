<script lang="ts">

import { defineComponent } from 'vue';

import ConfiguracaoClient from '@/client/ConfiguracaoClient';
import {ConfiguracaoModel } from '@/model/ConfiguracaoModel';

export default defineComponent({
  name: 'ConfiguracaoLista',
  data() {
    return {
        configuracoesList: new Array<ConfiguracaoModel>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
   ConfiguracaoClient.findAllConfiguracoes()
        .then(sucess => {
          this.configuracoesList = sucess
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
      <div class="col-md-8 text-start"> <p class="fs-3"> Configuracoes </p> </div>
      <div class="col-md-3"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-success" 
            to="/configuracao/formulario">Cadastrar configuracao
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
              <th scope="col" class="text-start">Valor Minuto</th>
               <th scope="col">Valor Multa Minuto</th>
               <th scope="col">Vagas Carro</th>
                <th scope="col">Vagas Moto</th>
                 <th scope="col">Vagas Van</th>
              <th scope="col">Opcoes</th>
            </tr>
          </thead>  
          <tbody class="table-group-divider">
            
            <tr v-for="item in configuracoesList" :key="item.id">
              <th class="col-md-1">{{ item.id}}</th>
              <th class="text-start">{{ item.valorHora}}</th>
               <th class="text-start">{{ item.valorMinutoHora }}</th>
              <th class="text-start">{{ item.vagasCarro}}</th>
              <th class="text-start">{{ item.vagasMoto}}</th>
              <th class="text-start">{{ item.vagasVan}}</th>



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