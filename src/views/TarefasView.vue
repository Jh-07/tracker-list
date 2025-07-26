<template>
    <div class="column is three-quarter">
      <h1>
        <FormularioTarefas @adicionar-tarefa="adicionarTarefa"/>
      </h1>
      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa.descricao">
          <TarefaComponent :tarefa="tarefa"/>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefaComponent from '../components/TarefaComponent.vue';
import ITarefa from '../interfaces/ITarefa';
import { useTarefasStore } from '@/stores/TarefasStore';

export default defineComponent({
  name: 'TarefasView',
  components: {FormularioTarefas,TarefaComponent},
  data(){
    return{
      tarefas : [] as ITarefa[]
    }
  },
  created(){
    const tarefaStore = useTarefasStore();
    this.tarefas = tarefaStore.tarefas
  },
  methods:{
    adicionarTarefa(tarefa: ITarefa){
      const tarefaStore = useTarefasStore();
      tarefaStore.adicionarTarefa(tarefa);
      this.tarefas = tarefaStore.tarefas; // Atualiza a lista de tarefas
    }
  }
});
</script>