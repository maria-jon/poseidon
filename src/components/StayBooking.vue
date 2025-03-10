<script setup lang="ts">
//import blueLagoon from '@/assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg (1).jpg';
</script>

<template>
    <div class="stay-booking">
        <div class="stay-booking-container">
            <div class="stay-booking-text">
            <h1>Book your stay</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse 
             cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="check-availability">
                <div class="image-lagoon">
                    <img :src="blueLagoon" alt="" width="500" height="400">
                </div>
                <div class="check-form">

                </div>
            </div>
        </div>
            
      
    </div>
</template>
<style scoped lang="scss">
@import '@/style/variables.scss';
.stay-booking {
background-color: aqua;
height: 500px;
width: 500px;
}
</style>