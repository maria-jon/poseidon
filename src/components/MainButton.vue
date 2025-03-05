<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <button>{{ label }}</button>
</template>

<!-- Används såhär (byt ut label texten till det som behövs i den komponenten den ska användas i) <Button label="Click me" /> -->

<style scoped lang="scss">
button {
  background-color: $color-secondary-red-light;
  border-radius: 8px;
  color: $color-white;
  border: none;
  height: 38px;
  width: fit-content;
}
</style>
