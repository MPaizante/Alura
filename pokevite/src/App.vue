<script setup>
import { ref } from 'vue';
const show = null;
const nome = ref("Fulano");
const x = [1, 2 , 3 , 4 , 5 , 6 ,7 ,8  , 9 , 10];
</script>

<template>
    <div class="col-6">
      <h2>Compositiron</h2>

        <ul>
          <li v-for="item in x" :key="'item'">
            {{ item }}
          </li>
        </ul>
    </div>
    
</template>

<style>
</style>
