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
    <h2>{{ header }}</h2>
    <p>{{ text }}</p>
    <MainButton :label="label" :width="width" />
  </div>
</template>

<!-- Används så att importera först och sedan använd som
<PopupConfirmation header="rubriken" text="paragraph texten" label="knapptexten" width="önskad knappens bredd"/>  -->

<style scoped lang="scss">
div {
  background-color: $color-primary-light;
  border-radius: 8px;
}
</style>
