<template>
  <main class="columns is-gapeless is multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is three-quarter">
      <h1>
        <FormularioTarefas />
      </h1>
    </div>
    
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefas from './components/FormularioTarefas.vue';

export default defineComponent({
  name: 'App',
  components: {BarraLateral, FormularioTarefas}
});
</script>

<style>

</style>
