<script setup lang="ts">
import heroImage from '../assets/Images/poseidons-retreat.jpg'
import poseidonfish from '@/assets/Images/poseidon-fish.jpg'
import poseidonhall from '@/assets/Images/poseidon-hall.jpg'
import mermaid from '@/assets/Images/poseidon-mermaid.jpg'
//import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <main>
    <h2>About Poseidon’s Retreat</h2>
    <div>
      <p>
        Welcome to Poseidon's Retreat, the premier luxury escape in the heart of Atlantis! Founded
        by Poseidon himself, our hotel blends ancient Atlantean elegance with modern comfort.
      </p>
      <p>Dive into luxury at Poseidon’s Hotel – Where the Ocean Meets Elegance.</p>
      <!-- Mobile version-->
    </div>
    <div class="mobile">
      <img :src="poseidonfish" class="fishmobile" width="500" height="400" />
      <img :src="poseidonhall" class="hallmobile" width="500" height="400" />
    </div>
    <!-- Tablet version-->
    <div class="tablet">
      <img :src="heroImage" class="herotablet" width="500" height="400" />
      <img :src="poseidonfish" class="fishtablet" width="500" height="400" />
      <img :src="poseidonhall" class="halltablet" width="500" height="400" />
    </div>
    <!-- Desktop version-->
    <div class="desktop">
      <img :src="heroImage" class="herodesktop" width="500" height="400" />
      <img :src="poseidonfish" class="fishdesktop" width="500" height="400" />
      <img :src="poseidonhall" class="halldesktop" width="500" height="400" />
      <img :src="mermaid" class="mermaiddesktop" width="500" height="400" />
    </div>
  </main>
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
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .fishmobile {
    width: 95vw;
    height: 40vh;
    border-radius: 5px;
  }
  .hallmobile {
    width: 95vw;
    height: 40vh;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
/* Show only the tablet version for medium screens (601px ) */
@media (min-width: 601px) {
  .mobile {
    display: none;
  }
  p {
    margin-left: 80px;
    margin-right: 50px;
  }
  .tablet {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .herotablet {
    width: 300px;
    height: 250px;
    border-radius: 5px;
  }

  .fishtablet {
    width: 300px;
    height: 250px;
    border-radius: 5px;
  }

  .halltablet {
    width: 100px;
    height: auto;
    border-radius: 5px;
    flex-basis: 80%;
    text-align: center;
  }
}
/* Show only the desktop version for large screens (1024px and up) */
@media (min-width: 1024px) {
  main {
    margin-bottom: 470px;
  }
  .mobile {
    display: none;
  }
  .tablet {
    display: none;
  }
  .desktop {
    display: flex;
  }
  .herodesktop {
    margin-top: 204px;
    position: absolute;
    height: 35vh;
    width: 38.5vw;
    margin-left: 325px;
  }
  .fishdesktop {
    position: absolute;
    margin-left: 624px;
    height: 27vh;
    width: 19vw;
  }
  .halldesktop {
    position: absolute;
    height: 27vh;
    width: 19vw;
    margin-left: 325px;
  }
  .mermaiddesktop {
    position: absolute;
    margin-left: 925px;
    height: 63vh;
    width: 23vw;
  }
  p {
    margin-left: 325px;
    margin-bottom: 20px;
    margin-right: 290px;
  }
}
</style>
