<template>
    <header>
        <h1>
            <img  src="../assets/logo.png">
        </h1>

        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                    <router-link to="/projetos">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>

        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    
    export default defineComponent({
        name: 'BarraLateral'
    })

</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>