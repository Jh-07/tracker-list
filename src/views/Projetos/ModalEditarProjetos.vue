<template>
        <b-modal
            v-model="projetoStore.isModalAberto"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
        >

            <form @submit.prevent="$emit('atualizarProjeto', projetoAtualizado)">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <button
                            type="button"
                            class="delete"
                            @click="projetoStore.deactivateModalAberto()" />
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Nome do Projeto">
                            <b-input
                                type="text"
                                v-model="projetoAtualizado.nome"
                                placeholder="Digite o nome do projeto"
                                required> 
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="projetoStore.deactivateModalAberto()" />
                        <b-button
                            label="Atualizar"
                            type="is-primary" 
                            native-type="submit" />
                  
                    </footer>
                </div>
            </form>
        </b-modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BButton, BField, BInput, BModal } from "buefy";
import IProjeto from "@/interfaces/IProjeto";
import { useProjetosStore } from "@/stores/ProjetosStore";


export default defineComponent({
    name: "ModalEditarProjetos",
    components: {
        BModal,
        BButton,
        BField,
        BInput
    },
    data() {
        return {
            projetoStore: useProjetosStore(),
            projetoAtualizado : {id:"", nome:""} as IProjeto,
        };
    },
    updated(){ // created causa comportamento estranho pq as props não existem durante essa parte do ciclo de vida
        this.projetoAtualizado = { ...this.projeto}
        /**O que tá acontecendo aí em cima?
        R: simplesmente fazer this.projetoAtualizado = this.projeto faz com que eles tenham a MESMA REFERENCIA e não DUAS CÓPIAS INDEPENDENTES.
        Se fosse desse jeito, qualquer mudança em projetoAtualizado se refletiria em projeto(prop).
        Como queremos fazer uma edição, o ideal seria que as alterações fossem feitas depois que o botão "atualizar" fosse pressionado 
        e pra isso, precisamos que projetoAtualizado seja uma variável independente e cópia de projeto(prop).
        A linha cria uma shallow copy, que é justamente a criação de um novo objeto independente na memória .
        Porém essa cópia não é recomendada para objetos que possuem outros objetos dentro dele 
        
        Para esse fim, utilize a linha abaixo:
        
        this.projetoAtualizado = JSON.parse(JSON.stringify(this.projeto))

        */
    },
    props: {
        projeto: { type:  Object as PropType<IProjeto>, required: true },
        modalAberto: {type: Boolean}
    },
    emits : ["atualizarProjeto"]
     
});
</script>

<!--  <template #default="props">
                <modal-form
                    v-bind="formProps"
                    @close="props.close"
                    @atualizar-projeto="$emit('atualizarProjeto')"
                ></modal-form>
            </template> -->