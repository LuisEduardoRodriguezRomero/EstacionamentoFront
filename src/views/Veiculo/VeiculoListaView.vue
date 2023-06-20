<script lang="ts">


</script>

<template>
      <div class="container text-center mb-5 mt-5">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <button type="button" class="btn btn-outline-info" >Listar</button>
    </div>
    <div class="col-md-auto">
     Veiculos
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-outline-primary" ative>Cadastrar</button>
    </div>
  </div>
</div>

<div class="container">

<div class="row">
  <div class="col-sm-10 offset-sm-1">
    <table class="table table-hover table-dark border border-info table-sm ">
  <thead class="text-sm">
    <tr>
      <th scope="col" >Placa</th>
      <th scope="col">Condutor</th>
      <th scope="col">Modelo</th>
      <th scope="col">Cor</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr class="table-row">
      <th scope="row">AAA 0001</th>
      <td>Condutor 1 </td>
      <td>Mobi</td>
      <td>Azul</td>
     <td> 
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <th scope="row">AAA 0001</th>
      <td>Condutor 2</td>
      <td>Ka</td>
      <td>Preto</td>
      <td> 
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <th scope="row">AAA 0001</th>
      <td >Condutor 3</td>
      <td>HB20</td>
      <td>Verde</td>
      <td> 
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</div>

/* modal */


</template>

<style scoped>
.table-row{
padding: 0.1rem;
}
</style>