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
        path: "/marca/formulario/editar",
        name: "marca-formulario-editar-view",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Marca/MarcaEditarView.vue"
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
