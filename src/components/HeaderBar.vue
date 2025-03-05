<script setup lang="ts">
import { ref } from 'vue';

let menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="wrapper">
    <img src="@/assets/Logotype_Poseidons-retreat.svg">
    <button class="hamburger" @click="toggleMenu">
      <img src="@/assets/Icon-burger.svg">
    </button>
  </div>
  <div v-if="menuOpen">Menu</div>
</template>


<style lang="scss" scoped>
.wrapper {
  background-color: $color-primary-dark;
  color: $color-white;
  border: none;
  height: 80px;
  width: 100vw;
  display: flex;
  position: sticky;
  top: 0;
  padding-right: $margin-medium;
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

</style>
