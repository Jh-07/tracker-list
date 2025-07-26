
import  ITarefa from "@/interfaces/ITarefa";
import { defineStore } from "pinia";

export const useTarefasStore = defineStore('tarefas', {
    state: () => ({ //Funciona como o data() de um componente
        tarefas: [] as ITarefa[]
    }),
    getters: { // Funciona como o computed de um componente
        listaTarefas(state): ITarefa[] {
            return state.tarefas;
        },
    },
    actions: { // Funciona como os métodos de um componente
        adicionarTarefa(novaTarefa: ITarefa)  {
            this.tarefas.push(novaTarefa)
        }

    }
})