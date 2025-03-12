<script setup lang="ts">
import heroImage from '../assets/Images/poseidons-retreat.jpg'
import poseidonfish from '@/assets/Images/poseidon-fish.jpg'
import poseidonhall from '@/assets/Images/poseidon-hall.jpg'
import mermaid from '@/assets/Images/poseidon-mermaid.jpg'
</script>

<template>
  <main>
    <h2>About Poseidon’s Retreat</h2>
    <div class="about">
      <p>
        Welcome to Poseidon's Retreat, the premier luxury escape in the heart of Atlantis! Founded
        by Poseidon himself, our hotel blends ancient Atlantean elegance with modern comfort.
      </p>
      <p>Dive into luxury at Poseidon’s Hotel – Where the Ocean Meets Elegance.</p>
    </div>
    <!-- Mobile version-->
    <div class="mobile">
      <img
        :src="poseidonfish"
        class="fishmobile"
        width="2562"
        height="1442"
        alt="an underwater door with schools of fish swimming"
      />
      <img
        :src="poseidonhall"
        class="hallmobile"
        width="2560"
        height="1440"
        alt="a majestic underwater hall covered in corals"
      />
    </div>
    <!-- Tablet version-->
    <div class="tablet">
      <img
        :src="heroImage"
        class="herotablet"
        width="2560"
        height="1440"
        alt="a colorful underwater city with corals and fish swimming by"
      />
      <img
        :src="poseidonfish"
        class="fishtablet"
        width="2562"
        height="1442"
        alt="an underwater door with schools of fish swimming"
      />
      <img
        :src="poseidonhall"
        class="halltablet"
        width="2560"
        height="1440"
        alt="a majestic underwater hall covered in corals"
      />
    </div>
    <!-- Desktop version-->
    <div class="desktop">
      <div class="left">
        <div class="top">
          <img
            :src="poseidonhall"
            class="halldesktop"
            width="2560"
            height="1440"
            alt="a majestic underwater hall covered in corals"
          />
          <img
            :src="poseidonfish"
            class="fishdesktop"
            width="2562"
            height="1442"
            alt="an underwater door with schools of fish swimming"
          />
        </div>
        <div class="bottom">
          <img
            :src="heroImage"
            class="herodesktop"
            width="2560"
            height="1440"
            alt="a colorful underwater city with corals and fish swimming by"
          />
        </div>
      </div>
      <div class="right">
        <img
          :src="mermaid"
          class="mermaiddesktop"
          width="1440"
          height="2056"
          alt="mermaid swimming towards the surface"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  text-align: center;
  margin-top: 12px;
}

.about {
  max-width: 95%;
}

p {
  margin: 1rem 0 1rem 0;
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
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem 0 0.75rem;
  }
  .fishmobile {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .hallmobile {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
/* Show only the tablet version for medium screens (601px ) */
@media (min-width: 601px) {
  .about {
    max-width: 80%;
    align-self: flex-start;
    margin-left: 4%;
  }
  .mobile {
    display: none;
  }
  .tablet {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .herotablet {
    max-width: 45%;
    height: auto;
    border-radius: 5px;
  }

  .fishtablet {
    max-width: 45%;
    height: auto;
    border-radius: 5px;
  }

  .halltablet {
    max-width: 92%;
    height: auto;
    border-radius: 5px;
    flex-basis: 80%;
    text-align: center;
  }
}
/* Show only the desktop version for large screens (1024px and up) */
@media (min-width: 1024px) {
  .about {
    margin-left: 15%;
    max-width: 60%;
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
    gap: 1rem;
    overflow: hidden;
  }
  .top {
    display: flex;
    gap: 1rem;
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
    gap: 1rem;
    overflow: hidden;
  }
  .right {
    max-width: 40%;
    height: auto;
    img {
      max-height: 100%;
      width: auto;
      border-radius: 5px;
    }
  }
}
</style>
