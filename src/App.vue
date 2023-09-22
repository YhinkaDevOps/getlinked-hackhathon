<template>

  <RouterView />
</template>

<script setup>
import {RouterView } from 'vue-router'
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/clash-display');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.nav-header{
  font-family:'Clash Display', sans-serif; 
}

.nav-items{
  font-family: 'Montserrat', sans-serif;
}
</style>