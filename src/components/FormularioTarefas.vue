<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8">
                <input type="text" placeholder="Nome da tarefa" class="input">
            </div>
            <div class="columns">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section class="column">
                        <strong>{{ tempoDecorrido }}</strong>
                    </section>
                    <button class="button  column " :disabled="cronometroAtivo" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button column" :disabled="!isCronometroIniciado" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                    <button class="button column" :disabled="!cronometroAtivo" @click="pausar">
                        <span class="icon">
                            <i class="fas fa-pause"></i>
                        </span>
                        <span>Pausar</span>
                    </button>
                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'FormularioTarefas',
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroAtivo: false
        }
    },
    computed: {
        tempoDecorrido(): string {
            console.log(new Date(this.tempoEmSegundos * 1000).toTimeString())

            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
            //new Date cria um horário no formato "aaaa-mm-ddZhh:mm:SS:ssss"
            //Nesse caso, o construtor passa o tempo inicial (que começa por volta de 1970)
            //mas o mais importante é que retorna o horário 00:00:00:0000, que é capturado com o método substring
        },
        isCronometroIniciado(): boolean{
             return this.tempoDecorrido!== "00:00:00"
        }
    },
    methods: {
        iniciar() {
            this.cronometroAtivo = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
            //setInterval executa uma função a cada x milisegundos (no caso 1000ms)
            //Retorna o Id desse intervalo além de executar a função
        },

        finalizar() {
            this.cronometroAtivo = false
            clearInterval(this.cronometro)
            this.tempoEmSegundos = 0
        },
        pausar() {
            this.cronometroAtivo = false
            clearInterval(this.cronometro)
        }
    }
})

</script>