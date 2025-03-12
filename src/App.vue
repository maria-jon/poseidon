<script setup lang="ts">
import FooterSection from './components/FooterSection.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterSection />
  </footer>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 998;
}
</style>
