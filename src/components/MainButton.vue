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
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25); // x: 0, y: 1, blur: 1, spread: 0
  padding: 0.5rem 1rem;

  &:hover {
    background-color: $color-secondary-red-dark;
    font-size: 1.125rem;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>
