<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HeroSection from '../components/HeroSection.vue';
import MainButton from '@/components/MainButton.vue'
</script>

<template>
  <MainButton label="Text här" />
  <main>
    <TheWelcome />
    <HeroSection />
  </main>
</template>
