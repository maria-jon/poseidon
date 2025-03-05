<script setup lang="ts">
import heroImage from '../Images/komprimerad poseidons-retreat_1_2560x1440_jpg (1) copy.jpg'
</script>

<template>
  
  <div class="herosection">
    <p class="titleone">Unwind at</p>
    <p class="titletwo">Poseidon's Retreat</p>
    <button class="book">Book a package</button>
    <img :src="heroImage" class="retreat" alt="Poseidons Retreat" width="500" height="400" />
  </div>
  <h2>Under the Sea – A Stay<br>Like No Other</h2>

</template>

<style scoped>
body {
    background-color: #C9E4D4;
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
    color: #EFEDEB;
    position: absolute;
    justify-content: center;
   }
.titletwo {
    font-size: 2rem;
    font-family: 'Merriweather', serif;
    font-weight: 700; /* 700 = Bold */
    line-height: 1.2;
    color: #EFEDEB;
    position: absolute;
    justify-content: center;
    padding-top: 70px;
    
}
.book {
    position: absolute;
    justify-content: center;
    margin-top: 175px;
    padding: 10px;
    border-radius: 8px;
    background-color: #F1E393;
    color: #1C272C;
    font-size: 1rem;
    font-family: 'Merriweather', serif;
    box-shadow: 4px 4px 10px black; 
  }
  h2 {
    text-align: center;
    font-family: 'Merriweather', serif;
  }
</style>