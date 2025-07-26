<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="adicionarProjeto"> <!-- @submit.prevent impede que a página seja carregada depois de enviar o formulário, impedindo que o estado global da página seja resetado -->
            <div class="field">
                <label class="label" for="nomeprojeto">
                    Nome do Projeto
                </label>
                <input class="input" type="text" id="nomeprojeto" placeholder="Digite o nome do projeto"
                    v-model="nomeProjeto">
                <div class="field">
                    <button class="button" type="submit">
                        Adicionar projeto
                    </button>
                </div>
            </div>
        </form>
        <table class="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome do projeto</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { defineComponent } from 'vue';
import { useProjetosStore } from '@/stores/ProjetosStore'

    export default defineComponent({
        name: 'ProjetosView',
        data() {
            return{
                nomeProjeto: '',
                projetos: [] as IProjeto[]
            }
            
        },
        created(){ // O pinia exige que a store seja criada em um hook, ela não pode ser criada de outra forma, apenas em setup() do composition API
            const projetoStore = useProjetosStore();
            this.projetos = projetoStore.listaProjetos;
        },
        methods: {
           adicionarProjeto(){
                const data = new Date().toISOString();
                const novoProjeto: IProjeto = {
                    id: data,
                    nome: this.nomeProjeto
                }
                const projetoStore = useProjetosStore(); //Também é necessário criar a store aqui, caso queira usar Options API, mas não faço ideia do porquê
                projetoStore.adicionarProjeto(novoProjeto); 
                this.nomeProjeto = ''
           }
        }
    })
</script>