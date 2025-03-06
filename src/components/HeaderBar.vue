<script setup lang="ts">
import { ref } from 'vue';

let menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="wrapper">
    <img class="logo" role="img" width="491" height="77" loading="lazy" alt="Poseidons retreat logo" src="@/assets/Logotype_Poseidons-retreat.svg">
    <button class="hamburger" @click="toggleMenu">
      <span class="material-symbols-outlined" v-if="menuOpen">close</span>
      <span class="material-symbols-outlined" v-else>menu</span>
    </button>
  </div>
  <div class="menu-overlay" v-if="menuOpen">
    <a href="">Home</a>
    <a href="">About us</a>
    <a href="">Our packages</a>
    <a href="">Book now</a>
  </div>
</template>


<style lang="scss" scoped>
.wrapper {
  background-color: $color-primary-dark;
  color: $color-white;
  border: none;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding-right: $margin-small;
  z-index: 999;
}

.logo {
  max-width: 80vw;
}

.hamburger {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-self: center;
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  color: $color-white;
  font-size: 3rem;
  align-self: flex-start;
}


button {
  background-color: transparent;
  padding: 0;
  border: none;
}

.menu-overlay {
  width: 50vw;
  height: 100vh;
  background-color: $color-primary-medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $margin-xsmall;
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 990;
}

a {
  color: $color-white;
}

@media only screen and (min-width: 1024px) {
  .menu-overlay {
    flex-direction: row;
    background-color: $color-primary-dark;
  }
}
</style>
