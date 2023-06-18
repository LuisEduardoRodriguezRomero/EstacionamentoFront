<script lang="ts">

</script>

<template>
      <div class="container text-center mb-5 mt-5">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <button type="button" class="btn btn-outline-info" >Listar</button>
    </div>
    <div class="col-md-auto">
     Condutores

    </div>
    <div class="col col-lg-2">
    <button type="button" class="btn btn-outline-primary" ative>Cadastrar</button>
    </div>
  </div>
</div>

<div class="container">

<div class="row">
  <div class="col-sm-10 offset-sm-1">
    <table class="table table-hover table-bordered border border-info-subtle table-sm ">
  <thead class="text-sm">
    <tr>
      <th scope="col" >CPF</th>
      <th scope="col">Nome</th>
      <th scope="col">Telefone</th>
      <th scope="col">Status</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr class="table-row">
      <th scope="row">###.###.###-##</th>
      <td>Condutor 1 </td>
      <td>(##) #########</td>
      <td>Ativo</td>
     <td> 
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <th scope="row">###.###.###-##</th>
      <td>Condutor 2</td>
      <td>(##) #########</td>
      <td>Ativo</td>
      <td> 
      <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Excluir</button>
  <button type="button" class="btn btn-outline-info">Editar</button>
  <button type="button" class="btn btn-outline-danger">Ver</button>
</div>
</td>
    </tr>
    <tr>
      <th scope="row">###.###.###-##</th>
      <td >Condutor 3</td>
      <td>(##) #########</td>
      <td>Ativo</td>
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
</template>

<style scoped>
.table-row{
padding: 0.1rem;
}
</style>