<script setup lang="ts">
import { onMounted } from 'vue'
import thebluelagoon from '@/assets/Images/the-blue-lagoon.jpg'
import heroImage from '@/assets/Images/poseidons-retreat.jpg'
import ines from '@/assets/Images/ines.jpg'
import thesiren from '@/assets/Images/the-siren.jpg'
import poseidontemple from '@/assets/Images/poseidons-temple.jpg'
import MainButton from './MainButton.vue'

function initPage() {
  const sliderContainer: HTMLElement | null = document.querySelector('.slider-container')
  const slider: HTMLElement | null = document.querySelector('.slider')
  const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slider img')

  if (!sliderContainer || !slider || images.length === 0) return

  let currentIndex: number = 0
  let autoSlideInterval: number

  const updateSlider = (): void => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
  }

  const showNextImage = (): void => {
    currentIndex = (currentIndex + 1) % images.length
    updateSlider()
  }

  const startAutoSlide = (): void => {
    stopAutoSlide()
    autoSlideInterval = window.setInterval(showNextImage, 4000) // change image every 4 seconds
  }

  const stopAutoSlide = (): void => {
    clearInterval(autoSlideInterval)
  }

  startAutoSlide()
}

onMounted(() => {
  initPage()
})
</script>

<template>
  <div class="herosection">
    <h1>
      <span class="titleone">Unwind at</span>
      <span class="titletwo">Poseidon's Retreat</span>
    </h1>
    <div class="routerlink">
      <RouterLink class="book" to="/packages">
        <MainButton label="Book a package" width="12rem" class="book" />
      </RouterLink>
    </div>
    <img :src="heroImage" class="retreat" alt="Poseidons Retreat" width="500" height="400" />
  </div>
  <h2>Under the Sea – A Stay<br />Like No Other</h2>

  <section class="welcome">
    <article class="text">
      Welcome to Poseidon’s Retreat, a one-of-a-kind underwater retreat where luxury meets the deep
      blue. Immerse yourself in a world of tranquility beneath the waves and wake up to breathtaking
      views of the ocean’s wonders.
    </article>
    <article class="text">🌊 Sleep beneath the sea, surrounded by mesmerizing marine life.</article>
    <article class="text">
      🍽 Dine with the depths, enjoying gourmet meals with panoramic underwater views.
    </article>
    <article class="text">
      ✨ Experience serenity and adventure, from spa treatments to ocean excursions.
    </article>
    <article class="text">Let us create your perfect stay.</article>
    <RouterLink to="/about" class="about">
      <MainButton label="About the retreat" width="15rem" />
    </RouterLink>
  </section>

  <h3>Discover Our<br />Underwater Stays</h3>

  <!-- Mobile and Tablet-->
  <div class="slider-container">
    <div class="slider">
      <div class="slide">
        <img :src="thebluelagoon" class="imgslide" width="500" height="400" />
        <p class="image-label">The Blue Lagoon</p>
      </div>
      <div class="slide">
        <img :src="ines" class="imgslide" width="500" height="400" />
        <p class="image-label">Ines Suite</p>
      </div>
      <div class="slide">
        <img :src="thesiren" class="imgslide" width="500" height="400" />
        <p class="image-label">The Siren</p>
      </div>
      <div class="slide">
        <img :src="poseidontemple" class="imgslide" width="500" height="400" />
        <p class="image-label">Poseidon's Temple</p>
      </div>
    </div>
  </div>

  <!-- Desktopversion-->
  <div class="image-grid">
    <div class="image-box">
      <img :src="thebluelagoon" alt="The Blue Lagoon" />
      <p class="image-label">The Blue Lagoon</p>
    </div>
    <div class="image-box">
      <img :src="ines" alt="Ines Suite" />
      <p class="image-label">Ines Suite</p>
    </div>
    <div class="image-box">
      <img :src="thesiren" alt="The Siren" />
      <p class="image-label">The Siren</p>
    </div>
    <div class="image-box">
      <img :src="poseidontemple" alt="Poseidon's Temple" />
      <p class="image-label">Poseidon's Temple</p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #c9e4d4;
}

a {
  all: unset;
}
.about {
  display: flex;
  margin: 1rem;
}

.about button {
  margin-left: auto;
}

.herosection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
}
.retreat {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
h1 {
  font-family: 'Merriweather', serif;
  color: #efedeb;
  position: absolute;
  justify-content: center;
}
.titleone {
  display: block;
  font-size: 2.4rem;
  text-align: center;
}
.titletwo {
  display: block;
  text-align: center;
  font-size: 2.4rem;
}
.routerlink {
  position: absolute;
  justify-content: center;
  margin-top: 150px;
}
.book {
  background-color: #fac801ff;
  color: #1c272c;
}
.book:hover {
  background-color: #fac801;
}
h2 {
  text-align: center;
  font-family: 'Merriweather', serif;
  margin-top: 20px;
}
.welcome {
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
  height: fit-content;
}

.text {
  margin-bottom: 10px;
  font-size: 1rem;
}
h3 {
  text-align: center;
  font-family: 'Merriweather', serif;
  margin-top: 10px;
  margin-bottom: 10px;
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #688272;
  padding: 10px 0;
}

.slider {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
}

.slide {
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
}

.imgslide {
  width: 95%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.image-label {
  position: absolute;
  left: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
  text-align: right;
}

@media (min-width: 320px) {
  .slider-container {
    display: block;
  }
  .image-grid {
    display: none;
  }
  .image-label {
    position: absolute;
    bottom: 6px;
    right: 1;
    width: 95%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 1rem;
    text-align: right;
  }
}

@media (min-width: 768px) {
  .herosection {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  .titleone {
    font-size: 3rem;
  }
  .titletwo {
    font-size: 3rem;
  }

  .about {
    margin: 1rem 0;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .text {
    max-width: 500px;
  }
  .aboutbtn {
    margin-left: 130px;
  }
  .book {
    font-size: 1rem;
    margin-top: 20px;
  }
  h3 {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  h2 {
    margin-top: 35px;
  }
  .image-grid {
    display: none;
  }
  .imgslide {
    width: 95%;
    height: 50vh;
    object-fit: cover;
    border-radius: 5px;
  }
  .image-label {
    position: absolute;
    bottom: 1;
    left: 19px;
    width: 95%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 1.2rem;
    padding: 10px 15px;
    text-align: right;
    font-family: 'Merriweather', serif;
  }
}
@media (min-width: 1024px) {
  .herosection {
    height: 75vh;
  }
  .titleone {
    font-size: 4rem;
  }
  .titletwo {
    font-size: 4rem;
  }
  .slider-container {
    display: none;
  }
  .image-grid {
    display: flex;
  }
  .routerlink {
    position: absolute;
    justify-content: center;
    margin-top: 0;
  }

  .aboutbtn {
    margin-left: 500px;
  }
  .book {
    margin-top: 230px;
    font-size: 1rem;
  }
  .image-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: #688272;
  }

  .image-box {
    width: 350px;
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 18px;
    padding: 10px 15px;
    text-align: right;
    font-family: 'Merriweather', serif;
  }
}
</style>
