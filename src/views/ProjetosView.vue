<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="adicionarProjeto">
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

    
    export default defineComponent({
        name: 'ProjetosView',
        data() {
            return{
                nomeProjeto: '',
                projetos: [] as IProjeto[],
            }
            
        },
        methods: {
            adicionarProjeto(){
                this.projetos.push({
                    id: new Date().toISOString(),
                    nome: this.nomeProjeto
                })
                this.nomeProjeto = ''
            }
        }
    })
</script>