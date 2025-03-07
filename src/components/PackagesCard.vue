<script setup lang="ts">
import MainButton from './MainButton.vue'
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
    <MainButton label="Book now" width="9rem" />
  </article>
</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-bottom: 2rem;
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

button {
  margin-left: auto;
  margin-top: auto;
}

@media (max-width: 768px) {
}
</style>
