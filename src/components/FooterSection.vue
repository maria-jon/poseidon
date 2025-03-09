<script setup lang="ts">
import { ref } from "vue";
import FooterIcons from "./footerIcons/FooterIcons.vue";
</script>

<template>
    <footer class="menu-footer">
      <div class="menu-container">

         <FooterIcons />

        <div class="menu-nav">
          <div class="menu-list">
            <RoutinLink to="/home">Home</RoutinLink>
            <RoutinLink to="/about">About Us</RoutinLink>
            <RoutinLink to="/packages">Our Packages</RoutinLink>
            <RoutinLink to="/booking">Book Now</RoutinLink>
          </div>
        </div>
        <RoutingLink to="" class="privacy-text">Privacy policy</RoutingLink>
      </div>
    </footer>
  </template>



<style scoped lang="scss">
.menu-footer {
  background-color: $color-primary-medium;
  color: #fff;
  min-height: 200px;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-origin: border-box;
  margin-top: 3rem;
  overflow: visible;
  .menu-container {
    margin-bottom: 1rem;
  }
  .menu-list {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 0;
   }
     a {
    color: #fff;
    display: inline-block;
    font-size: 1.3rem;
    &:hover {
      color: $color-primary-light;
      text-decoration: none;
    }
  }

.privacy-text {
    text-align: center;
    position: absolute;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    background-color: $color-primary-dark;
    padding: 0.5rem;
    bottom: 0;
    width: 100%;
    left: 0;
  }
}

@media (max-width: 768px) {
  .menu-footer ul {
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    min-height: 200px;
   }
  
}
</style>