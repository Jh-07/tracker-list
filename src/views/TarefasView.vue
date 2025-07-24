<template>
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
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefaComponent from '../components/TarefaComponent.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
  name: 'TarefasView',
  components: {FormularioTarefas,TarefaComponent},
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