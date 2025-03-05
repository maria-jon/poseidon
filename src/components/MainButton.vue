<script setup lang="ts">
defineProps({
  label: String,
})
</script>

<template>
  <button>{{ label }}</button>
</template>

<!-- Används såhär (byt ut label texten till det som behövs i den komponenten den ska användas i) <Button label="Click me" /> -->

<style scoped>
button {
  background-color: #c45c54;
  border-radius: 8px;
  color: #fcf9f7;
  border: none;
  height: 38px;
  width: fit-content;
}
</style>
