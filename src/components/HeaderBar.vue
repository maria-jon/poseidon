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
      <img src="@/assets/Icon-burger.svg">
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
  align-items: center;
  position: sticky;
  top: 0;
  padding-right: $margin-medium;
  z-index: 999;
}

.logo {
  max-width: 80vw;
}

.hamburger {
  height: 42px;
  width: 54px;
  border: 1px solid $color-error-red;
  display: flex;
  justify-content: center;
  align-self: center;
}

button {
  background-color: transparent;
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
</style>
