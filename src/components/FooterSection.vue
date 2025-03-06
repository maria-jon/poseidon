<script setup lang="ts">
import { ref } from "vue";
import FooterIcons from "./footerIcons/FooterIcons.vue";
</script>

<template>
    <footer class="menu-footer">
      <div class="menu-container">

         <FooterIcons />

        <nav class="menu-nav">
          <ul class="menu-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#packages">Our Packages</a></li>
            <li><a href="#book">Book Now</a></li>
          </ul>
        </nav>
        <p class="privacy-text">Privacy policy |  Icons made by <a href="https://www.flaticon.com/" target="_blank">Freepik</a></p>
      </div>
    </footer>
  </template>



<style lang="scss">
@import '/src/style/variables.scss';
footer {
  background-color: $color-primary-medium;
  color: #fff;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-origin: border-box;
  margin-top: 3rem;
  ul {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
   }
    .menu-list a {
    color: #fff;
    display: inline-block;
    font-size: 1.3rem;
    padding-left: 0.6rem;
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

    a{
        color: #fff;
        font-weight: 400;
        font-size: 1rem;
        text-decoration: underline;
    }
  }
}
</style>