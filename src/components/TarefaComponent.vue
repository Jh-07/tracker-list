<template>
    <div class="box has-text-weight-bold is-flex is-align-items-center is-justify-content-space-between is-align-content-center">
        <div class="column is-7 has-text-centered">
            {{ descricao }}
        </div>
        <div class="column has-text-centered">
            {{ tempoGasto }}
        </div>
    </div> 
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'TarefaComponent',
        props: {
            tempoGasto: {
                type:String , required: true
            },
            descricao:{
                type: String, required: true
            }
        }
    })

</script>