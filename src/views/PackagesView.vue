<script setup lang="ts">
import PackagesCard from '@/components/PackagesCard.vue'
import { usePackageStore } from '@/stores/packages'
import { storeToRefs } from 'pinia'

const packageStore = usePackageStore()
const { packages } = storeToRefs(packageStore)
</script>

<template>
  <div class="header">
    <h2>Our packages</h2>
    <p>
      Make your stay at Poseidon’s Retreat even more magical with our exclusive package deals.
      Whether you're looking for a romantic getaway, a deep-sea adventure, or ultimate relaxation,
      we have the perfect offer for you.
    </p>
    <span>Dive in and discover luxury beneath the waves!</span>
  </div>

  <main>
    <div class="wrapper" v-for="singlePackage in packages" :key="singlePackage.id">
      <PackagesCard
        :image="singlePackage.image"
        :alt="singlePackage.text.header"
        :imgWidth="singlePackage.imgWidth"
        :imgHeight="singlePackage.imgHeight"
        :header="singlePackage.text.header"
        :subheader="singlePackage.text.subheader"
        :subtext="singlePackage.text.subtext"
        :features="singlePackage.text.features"
        :route="singlePackage.route"
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
  max-width: 37rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: $color-primary-light;
  margin-bottom: 2rem;
}

.header {
  width: 90%;
  max-width: 37rem;
  text-align: center;
  height: fit-content;
  margin: 2rem 1rem;
  text-align: left;
  justify-self: center;
}

h2 {
  margin-bottom: 1rem;
  text-align: center;
}

p {
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: clamp(1rem, 5vw, 3rem);
    margin: 0 2rem 4rem 2rem;
  }

  .wrapper {
    height: 48rem;
    margin: 0;
    max-width: none;
  }

  .header {
    margin: 2rem 2rem;
    width: 60%;
    height: auto;
    max-width: none;
    justify-self: left;
  }

  h2 {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  main {
    display: flex;
    width: 80%;
    justify-self: center;
  }

  .wrapper {
    height: fit-content;
  }

  .header {
    width: 80%;
    justify-self: center;

    p {
      width: 60%;
    }
  }
}
</style>
