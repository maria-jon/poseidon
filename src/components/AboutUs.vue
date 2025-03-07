<script setup lang="ts">
//import thebluelagoon from '../assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg (1).jpg'
//import heroImage from '../assets/Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1).jpg'
//import ines from '../assets/Images/Komprimerad package-ines_2560x1440_jpg (1).jpg'
//import thesiren from '../assets/Images/Komprimerad package-the-siren_2560x1440_jpg (1).jpg'
//import poseidontemple from '../assets/Images/Komprimerad package-poseidons-temple_2560x1440_jpg (1).jpg'
import poseidonfish from '@/assets/Images/Komprimerad poseidon-fish_2560x1440_jpg (1).jpg'
import poseidonhall from '@/assets/Images/Komprimerad poseidon-hall_2560x1440_jpg (1).jpg'
import HeaderBar from './HeaderBar.vue'
</script>

<template>
  <HeaderBar />

  <h2>About us</h2>
  <div>
    <p>
      Welcome to Poseidon's Retreat, the premier luxury escape in the heart of Atlantis! Founded by
      Poseidon himself, our hotel blends ancient Atlantean elegance with modern comfort.
    </p>
    <p>Dive into luxury at Poseidon’s Hotel – Where the Ocean Meets Elegance.</p>
  </div>

  <img :src="poseidonfish" class="fish" width="500" height="400" />

  <img :src="poseidonhall" class="hall" width="500" height="400" />
</template>

<style scoped>
h2 {
  text-align: center;
  margin-top: 12px;
}
p {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1rem;
  margin-right: 5px;
  margin-left: 10px;
}
.fish {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30vh;
  width: 95vw;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.hall {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 25vh;
  width: 95vw;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
