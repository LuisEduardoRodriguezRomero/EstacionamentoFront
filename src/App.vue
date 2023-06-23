<template>
<nav class="navbar navbar-expand-lg bg-gray-700 text-light ">
  <div class="container-fluid mb-0">
      <i class="bi bi-car-front-fill"> Estacionamento</i>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item">
           <router-link class="nav-link" to="/marca/lista"><i class="bi bi-shield text-light"> Marcas</i></router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/listar-modelos"><i class="bi bi-shield text-light"> Modelos</i></router-link>  
        </li>

        <li class="nav-item">
         <router-link class="nav-link" to ="/listar-veiculos"><i class="bi bi-car-front text-light"> Veiculos</i></router-link>
        </li>
       
        <li class="nav-item">
         <router-link class="nav-link" to="/listar-condutores"><i class="bi bi-people text-light"> Condutores</i></router-link> 
        </li>

         <li class="nav-item">
         <router-link class="nav-link" to="/listar-movimentacoes"><i class="bi bi-alarm text-light"> Movimentacoes</i></router-link>  
        </li>
      
        <li class="nav-item">
          <router-link class="nav-link" to="/listar-configuracoes"> <i class="bi bi-gear text-light"> Configuracoes</i></router-link>  
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
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
@import "../node_modules/bootstrap/scss/_variables.scss";
@import "../node_modules/bootstrap/scss/_navbar.scss";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height:100vh;
}

 .bg-gray-700 {
      background-color: $gray-700;
    }

    .navbar-nav .nav-link:hover {
    background-color: $gray-600; 
    border-radius:10px;
  }


</style>
