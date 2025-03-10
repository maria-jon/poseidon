<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
    default: 'Click me',
  },
  width: String,
})
</script>

<template>
  <button :style="{ width: width || 'auto' }">
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<!-- Används såhär (byt ut label texten till det som behövs i den komponenten den ska användas i)
 <Button label="Click me" width="önskad knappens bredd"/> -->

<style scoped lang="scss">
button {
  background-color: $color-secondary-red-light;
  border-radius: 0.5rem;
  color: $color-white;
  border: none;
  height: 2.375rem;
  width: fit-content;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem;
  text-transform: uppercase;

  .button-label {
    display: inline-block; /* Ensures scaling works properly */
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    background-color: $color-secondary-red-dark;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    .button-label {
      transform: scale(1.125);
    }
  }
  &:disabled {
    background-color: $color-grey-500;
  }
}
</style>
