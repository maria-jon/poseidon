<script setup lang="ts">
import thebluelagoon from '../assets/Images/the-blue-lagoon.jpg'
import heroImage from '../assets/Images/poseidons-retreat.jpg'
import ines from '../assets/Images/ines.jpg'
import thesiren from '../assets/Images/the-siren.jpg'
import poseidontemple from '../assets/Images/poseidons-temple.jpg'

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer: HTMLElement | null = document.querySelector('.slider-container')
  const slider: HTMLElement | null = document.querySelector('.slider')
  const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slider img')

  if (!sliderContainer || !slider || images.length === 0) return

  //left arrow
  const leftArrow = document.createElement('button')
  leftArrow.classList.add('arrow', 'left')
  leftArrow.innerHTML = '&#9665;'

  //Right arrow
  const rightArrow = document.createElement('button')
  rightArrow.classList.add('arrow', 'right')
  rightArrow.innerHTML = '&#9655;'

  sliderContainer.appendChild(leftArrow)
  sliderContainer.appendChild(rightArrow)

  let currentIndex: number = 0
  let autoSlideInterval: number

  const updateSlider = (): void => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
  }

  const showNextImage = (): void => {
    currentIndex = (currentIndex + 1) % images.length
    updateSlider()
  }

  const showPrevImage = (): void => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    updateSlider()
  }

  const startAutoSlide = (): void => {
    stopAutoSlide()
    autoSlideInterval = window.setInterval(showNextImage, 5000) // change image every 5 seconds
  }

  const stopAutoSlide = (): void => {
    clearInterval(autoSlideInterval)
  }

  const restartAutoSlide = (): void => {
    stopAutoSlide()
    startAutoSlide()
  }

  rightArrow.addEventListener('click', () => {
    showNextImage()
    restartAutoSlide()
  })

  leftArrow.addEventListener('click', () => {
    showPrevImage()
    restartAutoSlide()
  })

  startAutoSlide()
})
</script>

<template>
  <div class="herosection">
    <p class="titleone">Unwind at</p>
    <p class="titletwo">Poseidon's Retreat</p>
    <div class="routerlink">
      <RouterLink to="/packages" v-slot="{ navigate }">
        <button class="book" @click="navigate">Book a package</button>
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
    <RouterLink to="/about" v-slot="{ navigate }">
      <button class="about" @click="navigate">About the retreat</button>
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
.titleone {
  font-size: 2rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  line-height: 1.2;
  color: #efedeb;
  position: absolute;
  justify-content: center;
}
.titletwo {
  font-size: 2rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  line-height: 1.2;
  color: #efedeb;
  position: absolute;
  justify-content: center;
  padding-top: 70px;
}
.routerlink {
  position: absolute;
  justify-content: center;
  margin-top: 160px;
}
.book {
  padding: 5px;
  border-radius: 8px;
  background-color: #f1e393;
  color: #1c272c;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-family: 'Merriweather', serif;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.book:hover {
  background-color: #fac801;
  font-size: 1.125rem;
  transform: scale(1.05);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
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
}
.about {
  background-color: #c45c54;
  border-radius: 8px;
  color: #efedeb;
  border: none;
  height: 38px;
  width: fit-content;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  margin-top: 20px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  margin-left: 10px;
}

.about:hover {
  background-color: #52201c;
  font-size: 1.125rem;
  transform: scale(1.05);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
}
.text {
  padding-top: 10px;
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
  left: 9.5px;
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
    height: 28vh;
  }
  .titleone {
    font-size: 3rem;
  }
  .titletwo {
    font-size: 3rem;
    padding-top: 90px;
  }
  .routerlink {
    position: absolute;
    justify-content: center;
    margin-top: 0;
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
    margin-top: 220px;
    font-size: 1rem;
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
    height: 35vh;
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
