import FormularioProjetos from "@/views/Projetos/FormularioProjetos.vue";
import ProjetosView from "@/views/ProjetosView.vue";
import TarefasView from "@/views/TarefasView.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { RouteRecordRaw } from  "vue-router"

const routes: RouteRecordRaw[] = [
  {
    // Configura rotas
    path: "/", //Rota raiz
    name: "Tarefas", //Dá nome a rota
    component: TarefasView, //escolhe o componente a ser renderizado
  },
  {
    // Configura rotas
    path: "/projetos", //Rota raiz
    name: "Projetos", //Dá nome a rota
    component: ProjetosView, //escolhe o componente a ser renderizado
  },
  {
    // Configura rotas
    path: "/projetos/novo", //Rota raiz
    name: "Novo Projeto", //Dá nome a rota
    component: FormularioProjetos, //escolhe o componente a ser renderizado
  },
  {
    // Configura rotas
    path: "/projetos/:id", //Rota raiz
    name: "Editar Projeto", //Dá nome a rota
    component: FormularioProjetos, //escolhe o componente a ser renderizado
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router