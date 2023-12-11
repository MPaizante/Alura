<script setup>
import { onMounted, ref, computed, reactive } from 'vue';

let nome = ref('Vue');

onMounted(()=>{
  nome.value = 'Vite';
})
let temperatura = ref(20);
const verificaTemperatura = computed(()=>{
  return temperatura.value >21 ? 'Tempreratura alta' : 'Temperatura baixa'
})

const verificaTemperaturaFunction= () =>{
  return temperatura.value >21 ? 'Tempreratura alta' : 'Temperatura baixa'
}
</script>

<template>
    <div class="col-6">
        <h2>Composition</h2>
        <p>{{ nome }}</p>
        <input type="text" v-model="nome">
        <hr>
        <span>{{ verificaTemperatura }}</span>
        <span>{{ verificaTemperaturaFunction }}</span>

    </div>
    
</template>

<style>
</style>
