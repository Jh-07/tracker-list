<template>
    <div class="box has-text-weight-bold is-flex is-align-items-center is-justify-content-space-between is-align-content-center">
        <div class="column is-7 has-text-centered">
            {{ tarefa.descricao }}
        </div>
        <div class="column has-text-centered">
            {{ tarefa.tempoGasto }}
        </div>
        <div class="column has-text-centered">
            {{ tarefa.projeto.nome }}
        </div>

    </div> 
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent } from 'vue';
import { PropType } from 'vue';

export default defineComponent({
    name: 'TarefaComponent',
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        },
    },
    mounted(){
        console.log('Tarefa: ', this.tarefa)
    }
})

</script>