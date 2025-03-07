<script setup lang="ts">
defineProps({
  header: String,
  subheader: String,
  subtext: String,
  features: { type: Array, items: String },
  image: String,
  id: Number,
})
</script>

<template>
  <article>
    <img :src="image" alt="" />
  </article>
</template>

<style scoped lang="scss">
article {
  width: 100%;
  height: 44.5rem;
}

img {
  width: 20rem;
}
</style>
