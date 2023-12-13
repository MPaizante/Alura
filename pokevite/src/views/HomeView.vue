<script setup>
import { onMounted, reactive, ref } from "vue";

import ListPokemon from "@/components/ListPokemon.vue";
let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemons.value = res.results));
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-4">
        <!--<div class="col-sm-12 col-md-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/27/pokemon-ash-pikachu-capa-1hbirpgndicl1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>-->

        <div class="col-sm-12 col-md-6">
          <div class="card">
            <div class="card-body row" >
              <ListPokemon
                v-for="pokemon in pokemons"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
              >
              </ListPokemon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
