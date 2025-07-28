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
    </section>
</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { defineComponent } from 'vue';
import { useProjetosStore } from '@/stores/ProjetosStore'

    export default defineComponent({
        name: 'FormularioProjetos',
        data() {
            return{
                nomeProjeto: '',
            }
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
                this.$router.push('/projetos'); //Redireciona para a página de projetos depois de adicionar o projeto
                // Grande OBS AQUI: a linha acima só funciona por causa de uma alteração que fiz no arquivo shims-vue.d.ts
                // que permite o uso do $router dentro do options api. Pra evitar esse erro, é melhor usar o setup () do composition api
                // só de usar esse método(mesmo que não esteja usando o composition api), já é possível usar o $router
           }
        }
    })
</script>