<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>

        <router-link to="/projetos/novo" class="button">
            <!-- Tudo que está dentro dessa tag é renderizado. Quando clicado, é substituído pelo componente definido em routers -->
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do projeto</th>
                    <th>Editar ou excluir</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <button class="button" @click="abrirModal(projeto)">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </button>
                        <!-- <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    

    <!-- MODAL USANDO BUEFY -->
     <!-- Isso aqui foi bem chato. O jeito que encontrei pra passar o projeto pra ser editado e retornar o projeto utilizado foi esse aí abaixo :
            tive que usar o store, pq não entendi como funciona o :model-value , além de ter que armazenar o booleano de usar o modal no storage também, 
            mas tenho certeza que existe uma maneira melhor de resolver isso-->
    <modal-editar-projetos 
    :projeto="projetoSelecionado"
    v-model="projetoStore.isModalAberto"
    @atualizar-projeto="atualizarProjeto" />

</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { defineComponent } from 'vue';
import { useProjetosStore } from '@/stores/ProjetosStore'
import ModalEditarProjetos from './Projetos/ModalEditarProjetos.vue';

export default defineComponent({
    name: 'ProjetosView',
    data() {
        return {
            projetos: [] as IProjeto[],
            projetoSelecionado: {id: "", nome: ""} as IProjeto,
            projetoStore: useProjetosStore()
        }

    },
    created() { // O pinia exige que a store seja criada em um hook, ela não pode ser criada de outra forma, apenas em setup() do composition API
        // const projetoStore = useProjetosStore();
        this.projetos = this.projetoStore.listaProjetos;
    },
    components:{
        ModalEditarProjetos,
    },
    methods: {
        atualizarProjeto(projetoAtualizado: IProjeto){
           // const projetoStore = useProjetosStore();
           console.log("Projeto atualizado: ", projetoAtualizado)
            this.projetoStore.atualizarProjeto(projetoAtualizado);
            this.projetoStore.deactivateModalAberto();
        },
        abrirModal(projeto:IProjeto){
            this.projetoSelecionado = projeto
            this.projetoStore.activateModalAberto()
        }
    }
})
</script>