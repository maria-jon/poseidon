<script setup lang="ts">
import FooterSection from './components/FooterSection.vue'
</script>

<template>
   
      <div class="footer-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.79c0-2.32 1.38-3.6 3.49-3.6.99 0 2.02.18 2.02.18v2.21h-1.14c-1.12 0-1.47.69-1.47 1.39v1.65h2.5l-.4 2.89h-2.1v6.99C18.34 21.19 22 17.06 22 12.07z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7zm4.75-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96zM3 8.75h4v12.5H3v-12.5zm7 0h4v1.77c.56-.88 1.59-1.77 3.32-1.77 3.55 0 4.2 2.33 4.2 5.36v7.14h-4V14.2c0-1.43-.03-3.28-2-3.28s-2.3 1.56-2.3 3.17v7.16h-4v-12.5z" />
          </svg>
        </a>
      </div>
 
  </template>

<style lang="scss">
@import '/src/style/variables';

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.icon {
  width: 45px;
  height: 45px;
  fill: white;
  transition: transform 0.2s ease;
}
.icon:hover {
  transform: scale(1.1);
  fill: $color-primary-light;
}
</style>
