<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8">
                <input type="text" placeholder="Nome da tarefa" class="input">
            </div>
            <div class="column">
                <section>
                    <strong>{{ tempoDecorrido }}</strong>
                </section>
            </div>
            <button class="button" @click="iniciar">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
          <button class="button" @click="pausar">
            <span class="icon">
              <i class="fas fa-pause"></i>
            </span>
            <span>Pausar</span>
          </button>

        </div>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name:'FormularioTarefas',
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        }
    },
    computed: {
        tempoDecorrido(): string{
            return new Date(this.tempoEmSegundos*1000).toISOString().substring(11,19)
            //new Date cria um horário no formato "aaaa-mm-ddZhh:mm:SS:ssss"
            //Nesse caso, o construtor passa o tempo inicial (que começa por volta de 1970)
            //mas o mais importante é que retorna o horário 00:00:00:0000, que é capturado com o método substring
        }
    },
    methods: {
        iniciar(){
            this.cronometro = setInterval(()=> {
                this.tempoEmSegundos +=1
            },1000)
            //setInterval executa uma função a cada x milisegundos (no caso 1000ms)
            //Retorna o Id desse intervalo além de executar a função
        },

        finalizar(){
            clearInterval(this.cronometro)
            this.tempoEmSegundos = 0
        },
        pausar(){
            clearInterval(this.cronometro)
        }
    }
})

</script>