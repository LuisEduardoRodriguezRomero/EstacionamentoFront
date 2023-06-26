import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/marca/lista",
    name: "marca-lista-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Marca/MarcaListaView.vue"
      ),
  },
  {
    path: "/marca/formulario",
    name: "marca-formulario-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Marca/MarcaCadastroView.vue"
      ),
    children: [
      {
        path: "/marca/editar",
        name: "marca-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Marca/MarcaCadastroView.vue"
          ),
      },
      {
        path: "/marca/formulario",
        name: "marca-formulario-excluir-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Marca/MarcaCadastroView.vue"
          ),
      },
    ],
  },
 









   {
    path: "/modelo/lista",
    name: "modelo-lista-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Modelo/ModeloListaView.vue"
      ),
  },
  {
    path: "/modelo/formulario",
    name: "modelo-formulario-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Modelo/ModeloCadastroView.vue"
      ),
    children: [
      {
        path: "/modelo/editar",
        name: "modelo-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Modelo/ModeloCadastroView.vue"
          ),
      },
      {
        path: "/modelo/formulario",
        name: "modelo-formulario-excluir-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Modelo/ModeloCadastroView.vue"
          ),
      },
    ],
  },






 {
    path: "/condutor/lista",
    name: "condutor-lista-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Condutor/CondutorListaView.vue"
      ),
  },
  {
    path: "/condutor/formulario",
    name: "condutor-formulario-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Condutor/CondutorCadastroView.vue"
      ),
    children: [
      {
        path: "/condutor/editar",
        name: "condutor-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Condutor/CondutorCadastroView.vue"
          ),
      },
      {
        path: "/condutor/formulario",
        name: "condutor-formulario-excluir-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Condutor/CondutorCadastroView.vue"
          ),
      },
    ],
  },
















 {
    path: "/veiculo/lista",
    name: "veiculo-lista-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Veiculo/VeiculoListaView.vue"
      ),
  },
  {
    path: "/veiculo/formulario",
    name: "veiculo-formulario-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Veiculo/VeiculoCadastroView.vue"
      ),
    children: [
      {
        path: "/veiculo/editar",
        name: "veiculo-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Veiculo/VeiculoCadastroView.vue"
          ),
      },
      {
        path: "/veiculo/formulario",
        name: "veiculo-formulario-excluir-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Veiculo/VeiculoCadastroView.vue"
          ),
      },
    ],
  },






  {
    path: "/movimentacao/lista",
    name: "movimentacao-lista-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Movimentacao/MovimentacaoListaView.vue"
      ),
  },
  {
    path: "/movimentacao/formulario",
    name: "movimentacao-formulario-view",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Movimentacao/MovimentacaoCadastroView.vue"
      ),
    children: [
      {
        path: "/movimentacao/editar",
        name: "movimentacao-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Movimentacao/MovimentacaoCadastroView.vue"
          ),
      },
      {
        path: "/movimentacao/formulario",
        name: "movimentacao-formulario-excluir-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Movimentacao/MovimentacaoCadastroView.vue"
          ),
      },
    ],
  },









];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
