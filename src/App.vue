<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Estacionamento</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link   class="nav-link active" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/listar-marcas">Marcas</router-link>
        </li>
       
        <li class="nav-item">
         <router-link class="nav-link" to="/listar-condutores">Condutores</router-link> 
        </li>
      
        <li class="nav-item">
          <router-link class="nav-link" to="/listar-configuracoes">Configuracoes</router-link>  
        </li>
     
        <li class="nav-item">
          <router-link class="nav-link" to="/listar-modelos">Modelos</router-link>  
        </li>
       
        <li class="nav-item">
         <router-link class="nav-link" to="/listar-movimentacoes">Movimentacoes</router-link>  
        </li>

        <li class="nav-item">
         <router-link class="nav-link" to ="/listar-veiculos">Veiculos</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  <router-view/>
</template>

<style lang="scss">
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
