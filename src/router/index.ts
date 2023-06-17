import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/listar-marcas',
    name: 'listar-marcas',
    component: () => import( '../views/Marca/MarcaListaView.vue')
  }
  ,
  {
    path:'/listar-condutores',
    name:'listar-condutores',
    component:() => import('../views/Condutor/CondutorListaView.vue')
  }
  ,
  {
    path:'/listar-configuracoes',
    name:'listar-configuracoes',
    component:() => import('../views/Configuracao/ConfiguracaoListaView.vue')
  }
  ,
  {
    path:'/listar-modelos',
    name:'listar-modelos',
    component:() => import('../views/Modelo/ModeloListaView.vue')
  }
  ,
  {
    path:'/listar-movimentacoes',
    name:'listar-movimentacoes',
    component:() => import('../views/Movimentacao/MovimentacaoListaView.vue')
  }
  ,
  {
    path:'/listar-veiculos',
    name:'listar-veiculos',
    component:() => import('../views/Veiculo/VeiculoListaView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
