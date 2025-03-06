<script setup lang="ts">
import thebluelagoon from '../assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg (1).jpg'
import heroImage from '../assets/Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1).jpg'
import ines from '../assets/Images/Komprimerad package-ines_2560x1440_jpg (1).jpg'
import thesiren from '../assets/Images/Komprimerad package-the-siren_2560x1440_jpg (1).jpg'
import poseidontemple from '../assets/Images/Komprimerad package-poseidons-temple_2560x1440_jpg (1).jpg'

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
    <button class="book">Book a package</button>
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
  </section>

  <button class="aboutbtn">ABOUT THE RETREAT</button>

  <h3>Discover Our<br />Underwater Stays</h3>

  <!-- Mobile and Tablet-->
  <div class="slider-container">
    <div class="slider">
      <img :src="thebluelagoon" class="retreat" width="500" height="400" />
      <img :src="ines" class="retreat" width="500" height="400" />
      <img :src="thesiren" class="retreat" width="500" height="400" />
      <img :src="poseidontemple" class="retreat" width="500" height="400" />
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
  margin-top: 32px;
  height: 45vh;
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
.book {
  position: absolute;
  justify-content: center;
  margin-top: 175px;
  padding: 5px;
  border-radius: 8px;
  background-color: #f1e393;
  color: #1c272c;
  font-size: 1rem;
  font-family: 'Merriweather', serif;
  box-shadow: 4px 4px 10px black;
  cursor: pointer;
}
.book:hover {
  backdrop-filter: blur(8px);
  background-color: #ead95d;
  transform: scale(1.05);
  box-shadow: 6px 6px 12px black;
}
h2 {
  text-align: center;
  font-family: 'Merriweather', serif;
  margin-top: 10px;
}
.welcome {
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
}
.aboutbtn {
  background-color: #c45c54;
  border-radius: 8px;
  color: #fcf9f7;
  border: none;
  height: 38px;
  width: fit-content;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 4px 4px 10px black;
  margin-bottom: 20px;
  margin-left: 10px;
}
.aboutbtn:hover {
  backdrop-filter: blur(8px);
  background-color: #d66b63;
  transform: scale(1.05);
  box-shadow: 6px 6px 12px black;
  color: #efedeb;
}
.text {
  padding-top: 10px;
  font-size: 1rem;
}
h3 {
  text-align: center;
  font-family: 'Merriweather', serif;
  margin-top: 10px;
}

.slider-container {
  width: 100%;
  overflow: hidden;
  margin: auto;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.slider img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (min-width: 320px) {
  .slider-container {
  display: block; 
}
.image-grid {
  display: none; 
}
}

@media (min-width: 768px) {
  .titleone {
  font-size: 3rem;
}
.titletwo {
  font-size: 3rem;
  padding-top: 90px;
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
.image-grid {
  display: none; 
}

}
@media (min-width: 1024px){
  .herosection {
  height: 75vh;
}
.slider-container {
    display: none; 
  }
  .image-grid {
    display: flex; 
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
