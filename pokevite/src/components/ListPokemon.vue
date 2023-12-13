<script setup>
const pokemon = defineProps(["name","urlBaseSvg"])
</script>


<template>
    <div class="col-4">
        <div class="card p-2 mb-3">
            <p class="text-center">
                {{ pokemon.name }}
                <img
              :src="urlBaseSvg"
              class="card-img-top"
              alt="..."
              height="80"

            />
            </p>
        
        </div>
        
    </div>

</template>

<style>

</style>
