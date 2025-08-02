<template>
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
                <td>
                    <button class="button" @click="deletarProjeto(projeto)">
                        <span class="icon is-small">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>

                </td>
            </tr>
        </tbody>
    </table>
    <!-- MODAL USANDO BUEFY -->
     <!-- Isso aqui foi bem chato. O jeito que encontrei pra passar o projeto pra ser editado e retornar o projeto atualizado foi esse aí abaixo :
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
import ModalEditarProjetos from '../Projetos/ModalEditarProjetos.vue';

export default defineComponent({
    name: 'ListaProjetos',
    data() {
        return {
            projetos: [] as IProjeto[],
            projetoSelecionado: { id: "", nome: "" } as IProjeto,
            projetoStore: useProjetosStore()
        }

    },
    created() {
       
        this.projetoStore.getListaProjetos().then(
            () => this.projetos = useProjetosStore().listaProjetos
        )
        
    },
    components: {
        ModalEditarProjetos,
    },
    methods: {
        //Aqui essa função faz o "POST" mas não renderiza as mudanças automaticamente
        async atualizarProjeto(projetoAtualizado: IProjeto) {
            console.log("Projeto atualizado: ", projetoAtualizado)
            await this.projetoStore.atualizarProjeto(projetoAtualizado).then(
                 this.projetoStore.deactivateModalAberto
            )
            //Aqui, atualiza a lista em "tempo real", mas é só um truque, a lista que está no database só será mostrada qunado o usuário recarregar o componente
            const index = this.projetos.findIndex(proj => proj.id == projetoAtualizado.id)
            this.projetos[index] = projetoAtualizado
           
        },
        async deletarProjeto(projetoDeletado: IProjeto) {
            const resposta = confirm(`Tem certeza que quer deletar o projeto: ${projetoDeletado.nome} ?`)
            if (resposta) {
                await this.projetoStore.deletarProjeto(projetoDeletado)
                
                //Mesmo truque de atualizar
                const index = this.projetos.findIndex(proj => proj.id == projetoDeletado.id)
                this.projetos.splice(index,1)
            }

        },
        abrirModal(projeto: IProjeto) {
            this.projetoSelecionado = projeto
            this.projetoStore.activateModalAberto()
        }
    },
 })
</script>