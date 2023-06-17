<script lang="ts">

</script>

<template>
      <div class="container text-center">
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

<table class="table table-hover table-bordered border border-info-subtle">
  <thead>
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col">Telefone</th>
      <th scope="col">Status</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">###.###.###-##</th>
      <td>Condutor 1 </td>
      <td>(##) #########</td>
      <td>Inativo</td>
    </tr>
    <tr>
      <th scope="row">###.###.###-##</th>
      <td>Condutor 2</td>
      <td>(##) #########</td>
      <td>Ativo</td>
    </tr>
    <tr>
      <th scope="row">###.###.###-##</th>
      <td >Condutor 3</td>
      <td>(##) #########</td>
      <td>Ativo</td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>