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
    <div class="text-content">
      <h2>{{ header }}</h2>
      <h6>{{ subheader }}</h6>
      <p>{{ subtext }}</p>
      <div class="features">
        <span v-for="(item, index) in features" :key="index"> ✔ {{ item }} </span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 2rem;
  width: 100%;
  height: 44.5rem;
  padding: 1rem;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
