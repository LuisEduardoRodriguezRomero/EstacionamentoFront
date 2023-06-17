<script lang="ts">

</script>

<template>
      <div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <button type="button" class="btn btn-outline-info" >Listar</button>
    </div>
    <div class="col-md-auto">
     Modelos
    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-outline-primary" ative>Cadastrar</button>
    </div>
  </div>
</div>

<table class="table table-hover table-bordered border border-info-subtle">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Marca</th>
      <th scope="col">Status</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>KA </td>
      <td>Ford</td>
      <td>Ativo</td>
      <td> <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mobi</td>
      <td>Fiat</td>
      <td>Inativo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >HB20</td>
      <td>Hyundai</td>
      <td>Ativo</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>