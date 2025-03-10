<script setup lang="ts">
import MainButton from './MainButton.vue'

defineProps({
  header: { type: String, required: true },
  text: { type: String, required: true },
  label: String,
  width: String,
})
</script>

<template>
  <div>
    <h5>{{ header }}</h5>
    <p>{{ text }}</p>
    <!-- <MainButton :label="label" :width="width" /> -->
  </div>
</template>

<!-- Används så att importera först och sedan använd som
<PopupConfirmation header="rubriken" text="paragraph texten" label="knapptexten" width="önskad knappens bredd"/>  -->

<style scoped lang="scss">
div {
  border: none;
  background-color: $color-primary-light;
  max-width: max-content;
}
/*
dialog {
  box-sizing: border-box;
  position: fixed;
  background-color: $color-primary-light;
  border-radius: 0.5rem;
  border: none;
  width: 24rem;
  max-width: 90%;
  height: 15rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 1.5rem;
  padding-top: 1.5rem;
}
*/
h5 {
  margin-bottom: 2rem;
}

button {
  position: absolute;
  bottom: 1.25rem;
  right: 1rem;
}
</style>
