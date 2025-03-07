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
  <dialog open="true">
    <h5>{{ header }}</h5>
    <p>{{ text }}</p>
    <MainButton :label="label" :width="width" />
  </dialog>
</template>

<!-- Används så att importera först och sedan använd som
<PopupConfirmation header="rubriken" text="paragraph texten" label="knapptexten" width="önskad knappens bredd"/>  -->

<style scoped lang="scss">
dialog {
  box-sizing: border-box;
  position: fixed;
  background-color: $color-primary-light;
  border-radius: 8px;
  border: none;
  width: 24rem;
  max-width: 90%;
  height: 15rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 24px;
  padding-top: 24px;
}

h5 {
  margin-bottom: 32px;
}

button {
  position: absolute;
  bottom: 20px;
  right: 17px;
}
</style>
