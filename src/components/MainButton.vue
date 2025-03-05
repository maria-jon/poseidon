<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <button>{{ label }}</button>
</template>

<!-- Används såhär: importera först och sedan (byt ut label texten till det som behövs i den komponenten den ska användas i) <Button label="Click me" /> -->

<style scoped lang="scss">
button {
  background-color: $color-secondary-red-light;
  border-radius: 8px;
  color: $color-white;
  border: none;
  height: 38px;
  width: fit-content;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $color-secondary-red-dark;
    font-size: 1.125rem;
  }
}
</style>
