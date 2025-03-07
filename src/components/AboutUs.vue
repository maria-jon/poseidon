<script setup lang="ts">
import heroImage from '../assets/Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1).jpg'
import poseidonfish from '@/assets/Images/Komprimerad poseidon-fish_2560x1440_jpg (1).jpg'
import poseidonhall from '@/assets/Images/Komprimerad poseidon-hall_2560x1440_jpg (1).jpg'
import mermaid from '@/assets/Images/Komprimerad poseidon-mermaid_1440x2560_jpg (1).jpg'
</script>

<template>
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
    <!-- Mobile version-->
  </div>
  <div class="mobile">
    <img :src="poseidonfish" class="fish" width="500" height="400" />
    <img :src="poseidonhall" class="hall" width="500" height="400" />
  </div>
  <!-- Tablet version-->
  <div class="tablet">
    <img :src="heroImage" class="hero" width="500" height="400" />
    <img :src="poseidonfish" class="fish" width="500" height="400" />
    <img :src="poseidonhall" class="hall" width="500" height="400" />
  </div>
  <!-- Desktop version-->
  <div class="desktop">
    <img :src="heroImage" class="hero" width="500" height="400" />
    <img :src="poseidonfish" class="fish" width="500" height="400" />
    <img :src="poseidonhall" class="hall" width="500" height="400" />
    <img :src="mermaid" class="mermaid" width="500" height="400" />
  </div>
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

/* Hide all versions by default */
.mobile,
.tablet,
.desktop {
  display: none;
}
/* Show only the mobile version on small screens (up to 600px) */
@media (max-width: 600px) {
  .mobile {
    display: flex;
    flex-direction: column; /* Stack images vertically */
    align-items: center; /* Center images */
  }
}
/* Show only the tablet version for medium screens (601px ) */
@media (min-width: 601px) {
  p {
    margin-left: 80px;
    margin-right: 50px;
  }
  .tablet {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  .hero,
  .fish {
    width: 300px;
    height: 200px;
    border-radius: 5px;
  }
  .hall {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    flex-basis: 80%;
    text-align: center;
  }
}
/* Show only the desktop version for large screens (1025px and up) */
@media (min-width: 1024px) {
  .tablet {
    display: none;
  }
  .desktop {
    display: flex;
    gap: 10px; /* Space between images */
    justify-content: center;
  }
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
