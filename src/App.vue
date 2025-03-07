<script setup lang="ts">
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <header>
    <div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
  <FooterSection />
</template>