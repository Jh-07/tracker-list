<template>
  <main class="columns is-gapeless is multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is three-quarter">
      <h1>
        <FormularioTarefas @adicionar-tarefa="adicionarTarefa"/>
      </h1>
      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa.descricao">
          <TarefaComponent :descricao="tarefa.descricao" :tempo-gasto="tarefa.tempoGasto" />
        </li>
      </ul>
    </div>


  </main>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefas from './components/FormularioTarefas.vue';
import TarefaComponent from './components/TarefaComponent.vue';
import ITarefa from './interfaces/Tarefas';

export default defineComponent({
  name: 'App',
  components: {BarraLateral, FormularioTarefas,TarefaComponent},
  data(){
    return{
      tarefas : [] as ITarefa[]
    }
  },
  methods:{
    adicionarTarefa(tempoDecorrido: string, descricaoTarefa: string){
      this.tarefas.push({
        descricao: descricaoTarefa,
        tempoGasto: tempoDecorrido
      })
    }
  }
});
</script>

<style>

</style>
