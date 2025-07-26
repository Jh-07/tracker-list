import IProjeto from "@/interfaces/IProjeto";
import { defineStore } from "pinia";

export const useProjetosStore = defineStore('projetos', { //'projetos é o Id desse store, serve pra referenciar ele'
    state: () => ({ //Funciona como o data() de um componente
        projetos: [] as IProjeto[]
    }),
    getters: { // Funciona como o computed de um componente
        listaProjetos(state): IProjeto[] {
            return state.projetos;
        },
    },
    actions: { // Funciona como os métodos de um componente
        adicionarProjeto(novoProjeto: IProjeto)  {
            this.projetos.push(novoProjeto)
        }

    }
})