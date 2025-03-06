<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<template>
    <footer class="menu-footer">
      <div class="menu-container">
        <div class="menu-icons">
          <a href="" target="_blank">
            <i class="instagram">Instagram</i>
          </a>
          <a href="" target="_blank">
            <i class="instagram">Instagram</i>
          </a>
          <a href="" target="_blank">
            <i class="instagram">Instagram</i>
          </a>
        </div>
        <nav class="menu-nav">
          <ul class="menu-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#packages">Our Packages</a></li>
            <li><a href="#book">Book Now</a></li>
          </ul>
        </nav>
        <p class="privacy-text">Copyright &copy;  {{ new Date().getFullYear() }} All rights reserved.</p>
      </div>
    </footer>
  </template>



<style lang="scss">
@import '/src/style/variables.scss';
footer {
  background-color: $color-primary-medium;
  color: #fff;
  min-height: 200px;
  position: relative;
 

  .menu-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
   }
  li a {
    color: #fff;
  }
}
.privacy-text {
    text-align: center;
    position: absolute;
    font-size: 0.8rem;
    color: #fff;
    background-color: #334D4D;
    padding: 0.5rem;
    bottom: 0;
    width: 100%;
}
</style>