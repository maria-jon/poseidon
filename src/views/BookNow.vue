<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import PopupConfirmation from '@/components/PopupConfirmation.vue'
</script>

<template>
  <HeaderBar />
  <PopupConfirmation
    header="We are sorry!"
    text="This package is currently unavailable on your selected dates. Try adjusting your search."
    label="Close"
    width="200px"
  />
</template>

<style></style>
