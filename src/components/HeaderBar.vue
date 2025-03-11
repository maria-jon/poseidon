<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

let desktop = ref(false)

let menuOpen = ref(false)

// Check viewport width dynamically as window size changes
onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
  handleWindowSizeChange()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})
const handleWindowSizeChange = () => {
  let viewport = window.innerWidth
  if (viewport > 1024) {
    desktop.value = true
    menuOpen.value = true
  } else {
    desktop.value = false
    menuOpen.value = false
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="wrapper">
    <RouterLink class="logo-link" to="/">
      <img
      class="logo"
      role="img"
      width="491"
      height="77"
      loading="lazy"
      alt="Poseidons retreat logo"
      src="@/assets/Logotype_Poseidons-retreat.svg"
      />
    </RouterLink>
    <div class="menu-overlay" v-if="desktop">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About us</RouterLink>
      <RouterLink to="/packages">Our packages</RouterLink>
      <RouterLink to="/booking">Book now</RouterLink>
    </div>
    <button class="hamburger" @click="toggleMenu">
      <span class="material-symbols-outlined" v-if="menuOpen">close</span>
      <span class="material-symbols-outlined" v-else>menu</span>
    </button>
  </div>
  <div class="menu-overlay" v-if="menuOpen">
    <RouterLink to="/" @click="closeMenu">Home</RouterLink>
    <RouterLink to="/about" @click="closeMenu">About us</RouterLink>
    <RouterLink to="/packages" @click="closeMenu">Our packages</RouterLink>
    <RouterLink to="/booking" @click="closeMenu">Book now</RouterLink>
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
  position: sticky;
  top: 0;
  padding: $margin-small;
  z-index: 999;
}

.logo-link {
  display: flex;
}
// Makes sure logo doesn't jump when hovering
.logo-link > a:hover {
  font-size: 1.375rem;
  text-decoration: none;
}
.logo {
  max-width: 80vw;
}

img.logo {
  max-height: 100%;
  width: auto;
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
    max-height: 80px;
  }
}
</style>
