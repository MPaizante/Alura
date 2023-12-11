<script setup>
import { onMounted, ref, computed, reactive } from 'vue';

let nome = ref('Vue');

let person = reactive({
  name:'Joe',
  age: 30

})
onMounted(()=>{
  person.name = 'Matheus';
  nome.value = 'Vite';
})
</script>

<template>
    <div class="col-6">
        <h2>Composition</h2>
        <p>{{ nome }}</p>
        <input type="text" v-model="nome">
        <hr>
        <span>{{ person.name }}</span>
        <br>
        <span>{{ person.age }}</span>

    </div>
    
</template>

<style>
</style>
