<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import poseidonMermaid from '@/assets/Images/Komprimerad poseidon-mermaid_1440x2560_jpg.jpg'
import MainButton from './MainButton.vue'

// Define an interface for the policy sections
interface IPolicySection {
  title: string
  points: string[]
}

// Initialize Vue Router for navigation
const router = useRouter()


// Create a reactive array of policy sections
const policySections = ref<IPolicySection[]>([
  {
    title: '1. Introduction',
    points: [
      'Poseidon Hotel values your privacy. This policy outlines how we collect, use, and protect your personal data.',
    ],
  },
  {
    title: '2. Information We Collect',
    points: [
      'We collect basic information such as your name, email, and preferences when you interact with our site.',
      'Additionally, cookies may be used to improve user experience.',
    ],
  },
  {
    title: '3. How We Use Your Data',
    points: [
      'To process bookings and reservations.',
      'To improve website functionality and enhance user experience.',
      'To provide relevant offers and services.',
    ],
  },
  {
    title: '4. Data Protection',
    points: [
      'We do not share your personal data with third parties unless necessary for service provision.',
      'All data is securely stored and protected.',
    ],
  },
  {
    title: '5. Cookies Policy',
    points: [
      'Our website uses cookies to enhance navigation and analyze site traffic.',
      'You can manage cookie preferences through your browser settings.',
    ],
  },
  {
    title: '6. Contact Us',
    points: ['For any privacy-related inquiries, please contact us at privacy@poseidonhotel.com.'],
  },
])

// Function to navigate back to the homepage
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="privacy-policy">
    <div class="image-section">
      <img
        :src="poseidonMermaid"
        class="image-privacy"
        alt="poseidon mermaid"
        height="500"
        weight="400"
      />
    </div>
    <div class="content-section">
      <h1>Privacy Policy</h1>
      <div v-for="(section, index) in policySections" :key="index" class="policy-section">
        <h2>{{ section.title }}</h2>
        <ul>
          <li v-for="(point, i) in section.points" :key="i">{{ point }}</li>
        </ul>
      </div>
      <div class="button-container">
        <MainButton label="Back to Home" :width="'10rem'" @click="goHome" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import '@/style/variables.scss';
.privacy-policy {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 5%;
  background-color: $color-background-light;
}
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40%; /* Prevents image from taking too much space */
}

.image-privacy {
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 5px;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}

/* Right-aligned content section */
.content-section {
  flex: 1;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 30px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    padding-bottom: 15px;
  }
}

/* Styling for policy sections */
.policy-section {
  margin-bottom: 10px;
  ul {
    list-style: none;
  }
}

/* Add bullet points only to the 4th section */
.policy-section:nth-child(4) ul {
  list-style: disc;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .privacy-policy {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    display: flex;
    height: auto;
    box-sizing: border-box;
  }
  .image-section {
    display: none;
  }
  .content-section {
    max-width: 600px;
    width: 100%;
    margin-top: 20px;
    height: auto;
  }
  .policy-section {
    margin: 15px;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
