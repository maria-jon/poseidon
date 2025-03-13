<script setup lang="ts">
import FooterIcons from './FooterIcons.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="menu-footer">
    <div class="menu-container">
      <FooterIcons />

      <div class="menu-nav">
        <div class="menu-list">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/packages">Our Packages</RouterLink>
          <RouterLink to="/booking">Book Now</RouterLink>
        </div>
      </div>
      <RouterLink to="/policy" class="privacy-text">Privacy policy</RouterLink>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import '@/style/variables.scss';

.menu-footer {
  background-color: $color-primary-medium;
  color: #fff;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-origin: border-box;
  margin-top: 3rem;
  overflow: visible;

  .menu-container {
    width: 100%;
  }

  .menu-list {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 0;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .menu-list {
      flex-direction: row;
    }
  }

  a {
    color: #fff;
    display: inline-block;
    font-size: 1.3rem;
    text-align: center;

    &:hover {
      color: $color-primary-light;
      text-decoration: none;
    }
  }

  .privacy-text {
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    background-color: $color-primary-dark;
    padding: 0.5rem;
    padding-bottom: 1rem;
    margin-top: auto;
    bottom: 0;
    width: 100%;
    left: 0;
  }
}
</style>
