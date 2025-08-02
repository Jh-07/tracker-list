import httpClient from "@/http";
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
        async getListaProjetos(){
           const response = await httpClient.get<IProjeto[]>("projetos")
           this.projetos = response.data
        },
        async adicionarProjeto(novoProjeto: IProjeto)  {
            await httpClient.post("projetos",
                {
                    id: novoProjeto.id,
                    nome: novoProjeto.nome
                },
            )
            this.projetos.push(novoProjeto)
        },
        async atualizarProjeto(projetoAtualizado: IProjeto){
            await httpClient.patch("projetos/"+ projetoAtualizado.id,
                {
                    nome: projetoAtualizado.nome
                }
            )
            await this.getListaProjetos()
            /* const index = this.projetos.findIndex(proj => proj.id == projetoAtualizado.id)
            this.projetos[index] = projetoAtualizado */
        },
        async deletarProjeto(projetoDeletado: IProjeto){
            await httpClient.delete("projetos/"+projetoDeletado.id)
            // const index = this.projetos.findIndex(proj => proj.id == projetoDeletado.id)
            // this.projetos.splice(index,1) //splice altera a lista original | slice cria uma cópia
        },
        activateModalAberto(){
            this.modalAberto = true
        },
        deactivateModalAberto(){
            this.modalAberto = false
        }
            
            


    }
})