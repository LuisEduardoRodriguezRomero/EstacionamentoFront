<script lang="ts">

</script>

<template>
      <div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <button type="button" class="btn btn-outline-info" >Listar</button>
    </div>
    <div class="col-md-auto">
     Marcas
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
      <th scope="col">Marca</th>
      <th scope="col">Status</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <td> 1 </td>
      <td>Fiat</td>
      <td>Ativo</td>
      <td> <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <td> 2</td>
      <td>Ford</td>
      <td>Ativo</td>
      <td> <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <td > 3</td>
      <td>Hyundai</td>
      <td>Ativo</td>
      <td> <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>