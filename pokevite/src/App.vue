<script setup>
import { ref } from 'vue';
let num = ref (0);


</script>

<template>
  <!--NAVBAR-->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="nav-link " aria-current="page" to="/" >NavBar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link class="nav-link " aria-current="page" to="/" >Home</router-link>
           
        </li>
        <li class="nav-item">
          <router-link class="nav-link " aria-current="page" to="/about" >About</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<!--CONTENT-->
<div class="main">
  <router-view></router-view>  
</div>
</template>