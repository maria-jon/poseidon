<script setup lang="ts">
import heroImage from '../assets/Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1).jpg'
import poseidonfish from '@/assets/Images/Komprimerad poseidon-fish_2560x1440_jpg (1).jpg'
import poseidonhall from '@/assets/Images/Komprimerad poseidon-hall_2560x1440_jpg (1).jpg'
import mermaid from '@/assets/Images/Komprimerad poseidon-mermaid_1440x2560_jpg (1).jpg'
</script>

<template>
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
</style>
