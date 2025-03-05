<script setup lang="ts">
import heroImage from '../assets/Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1).jpg'
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
  font-weight: 700; /* 700 = Bold */
  line-height: 1.2;
  color: #efedeb;
  position: absolute;
  justify-content: center;
}
.titletwo {
  font-size: 2rem;
  font-family: 'Merriweather', serif;
  font-weight: 700; /* 700 = Bold */
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
</style>
