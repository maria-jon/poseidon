<script setup lang="ts">
import { ref } from "vue";

// Describe the type for the policy section
interface PolicySection {
  title: string;
  points: string[];
}

// Creating a reactive partition array
const policySections = ref<PolicySection[]>([
  {
    title: "1. Introduction",
    points: ["Poseidon Hotel values your privacy. This policy outlines how we collect, use, and protect your personal data."],
  },
  {
    title: "2. Information We Collect",
    points: ["We collect basic information such as your name, email, and preferences when you interact with our site.", "Additionally, cookies may be used to improve user experience."],
  },
  {
    title: "3. How We Use Your Data",
    points: ["To process bookings and reservations.", "To improve website functionality and enhance user experience.", "To provide relevant offers and services."],
  },
  {
    title: "4. Data Protection",
    points: ["We do not share your personal data with third parties unless necessary for service provision.", "All data is securely stored and protected."],
  },
  {
    title: "5. Cookies Policy",
    points: ["Our website uses cookies to enhance navigation and analyze site traffic.", "You can manage cookie preferences through your browser settings."],
  },
  {
    title: "6. Contact Us",
    points: ["For any privacy-related inquiries, please contact us at privacy@poseidonhotel.com."],
  },
]);

// Function to go to the main page
const goHome = () => {
  console.log("Going back to home");
};
</script>

<template>
    <div class="privacy-policy">
      <div class="image-section">
        <img src="" alt="" />
      </div>
      <div class="content-section">
        <h1>Privacy Policy</h1>
        <div v-for="(section, index) in policySections" :key="index" class="policy-section">
          <h2>{{ section.title }}</h2>
          <ul>
            <li v-for="(point, i) in section.points" :key="i">{{ point }}</li>
          </ul>
        </div>
        <button @click="goHome" class="back-button">BACK TO HOME</button>
      </div>
    </div>
    <FooterSection />
  </template>

<style scoped lang="scss">

</style>