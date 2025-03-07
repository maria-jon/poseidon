<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import PopupConfirmation from '@/components/PopupConfirmation.vue'
</script>

<template>
  <HeaderBar />
  <PopupConfirmation
    header="Congratulations!"
    text="Your selected package is available. Click ‘Continue’ to finalize your reservation."
    label="Continue"
    width="200px"
  />
</template>

<style></style>
