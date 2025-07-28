import IProjeto from "@/interfaces/IProjeto";
import { defineStore } from "pinia";

export const useProjetosStore = defineStore('projetos', { //'projetos é o Id desse store, serve pra referenciar ele'
    state: () => ({ //Funciona como o data() de um componente
        projetos: [] as IProjeto[],
        modalAberto: false, //Tive que criar essa propriedade pra poder fazer o modal funcionar, mas aposto que tem uma maneira melhor de fazer isso
    }),
    getters: { // Funciona como o computed de um componente
        listaProjetos(state): IProjeto[] {
            return state.projetos;
        },
        isModalAberto(state): boolean{ 
            return state.modalAberto;
        }
    },
    actions: { // Funciona como os métodos de um componente
        adicionarProjeto(novoProjeto: IProjeto)  {
            this.projetos.push(novoProjeto)
        },
        atualizarProjeto(projetoAtualizado: IProjeto){
            const index = this.projetos.findIndex(proj => proj.id == projetoAtualizado.id)
            this.projetos[index] = projetoAtualizado
        },
        activateModalAberto(){
            this.modalAberto = true
        },
        deactivateModalAberto(){
            this.modalAberto = false
        }
            
            


    }
})