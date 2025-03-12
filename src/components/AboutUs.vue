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
      <div class="left">
        <div class="top">
          <img :src="poseidonhall" class="halldesktop" width="2560" height="1440"/>
          <img :src="poseidonfish" class="fishdesktop" width="2562" height="1442" />
        </div>
        <div class="bottom">
          <img :src="heroImage" class="herodesktop" width="2560" height="1440"/>
        </div>
      </div>
      <div class="right">
        <img :src="mermaid" class="mermaiddesktop" width="1440" height="2056" />
      </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mobile {
    display: none;
  }
  .tablet {
    display: none;
  }
  .desktop {
    display: flex;
    max-width: 70%;
    height: 60vh;
    gap: 10px;
    overflow: hidden;
  }
  .top {
    display: flex;
    gap: 10px;
    height: 50%;

    img {
      max-width: 49%;
      height: auto;
      object-fit: cover;
    }
  }
  .bottom {
    height: 60%;
    img {
      height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }
  .left {
    display: flex;
    max-height: 60vh;
    width: auto;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }
  .right {
    max-width: 40%;
    height: auto;
    img {
      max-height: 100%;
      width: auto;
    }
  }

  p {
    margin-left: 325px;
    margin-bottom: 20px;
    margin-right: 290px;
  }
}
</style>
