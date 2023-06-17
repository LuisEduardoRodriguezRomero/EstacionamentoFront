<script lang="ts">

</script>

<template>
      <div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <button type="button" class="btn btn-outline-info" >Listar</button>
    </div>
    <div class="col-md-auto">
     Movimentacoes
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-outline-primary" ative>Cadastrar</button>
    </div>
  </div>
</div>

<table class="table table-hover table-bordered border border-info-subtle">
  <thead>
    <tr>
      <th scope="col">Placa</th>
      <th scope="col">Condutor</th>
      <th scope="col">Entrada</th>
      <th scope="col">Saida</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">AAA 0001</th>
      <td>Condutor 1 </td>
      <td>DD-MM-YYYY HH:MM:SS</td>
      <td>DD-MM-YYYY HH:MM:SS</td>
    </tr>
    <tr>
      <th scope="row">AAA 0001</th>
      <td>Condutor 2</td>
      <td>DD-MM-YYYY HH:MM:SS</td>
      <td>DD-MM-YYYY HH:MM:SS</td>
    </tr>
    <tr>
      <th scope="row">AAA 0001</th>
      <td >Condutor 3</td>
      <td>DD-MM-YYYY HH:MM:SS</td>
      <td>DD-MM-YYYY HH:MM:SS</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>