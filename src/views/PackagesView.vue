<script setup lang="ts">
import PackagesCard from '@/components/PackagesCard.vue'
import { usePackageStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'

const packageStore = usePackageStore()
const { packages } = storeToRefs(packageStore)
</script>

<template>
  <header>
    <h3>Our packages</h3>
    <p>
      Make your stay at Poseidon’s Retreat even more magical with our exclusive package deals.
      Whether you're looking for a romantic getaway, a deep-sea adventure, or ultimate relaxation,
      we have the perfect offer for you.
    </p>
    <span>Dive in and discover luxury beneath the waves!</span>
  </header>

  <main>
    <div class="wrapper" v-for="singlePackage in packages" :key="singlePackage.id">
      <PackagesCard
        :image="singlePackage.image"
        :header="singlePackage.text.header"
        :subheader="singlePackage.text.subheader"
        :subtext="singlePackage.text.subtext"
        :features="singlePackage.text.features"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem 4rem 1rem;
}

.wrapper {
  width: 100%;
  height: 47.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: $color-primary-light;
  margin-bottom: 2rem;
}

header {
  width: 90%;
  max-width: 22rem;
  text-align: center;
  height: 17rem;
  margin: 2rem auto;
  text-align: left;
  // padding: 0 1rem;
}

h3 {
  margin-bottom: 1rem;
  text-align: center;
}

p {
  margin-bottom: 1rem;
}
</style>
