<script setup lang="ts">
import MainButton from './MainButton.vue'
defineProps({
  header: String,
  subheader: String,
  subtext: String,
  features: { type: Array, items: String },
  image: String,
  id: Number,
  alt: String,
  imgWidth: Number,
  imgHeight: Number,
  route: String,
})
</script>

<template>
  <article>
    <img :src="image" :alt="alt" :width="imgWidth" :height="imgHeight" />
    <div class="text-content">
      <h2>{{ header }}</h2>
      <h6>{{ subheader }}</h6>
      <p>{{ subtext }}</p>
      <div class="features">
        <span v-for="(item, index) in features" :key="index"> ✔ {{ item }} </span>
      </div>
    </div>
    <RouterLink :to="route || ''" class="button">
      <MainButton label="Book now" width="9rem" />
    </RouterLink>
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

a {
  all: unset;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
  height: 30%;
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

.button {
  margin-left: auto;
  margin-top: auto;
}

@media (min-width: 768px) {
  img {
    min-height: 13.5rem;
  }
}

@media (min-width: 1024px) {
  article {
    flex-direction: row;
    position: relative;
    flex-wrap: wrap;
  }

  img {
    width: 45%;
    height: 20rem;
  }

  .text-content {
    width: 50%;
  }
}

@media (min-width: 1500px) {
  img {
    height: auto;
  }
}
</style>
