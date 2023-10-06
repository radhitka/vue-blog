<template>
  <div>
    <Navbar />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>
