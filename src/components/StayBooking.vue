<script setup lang="ts">
import blueLagoon from '/src/assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg.jpg'
import { ref } from 'vue'
import MainButton from './MainButton.vue'

// Declare reactive variables to manage the form state
const fromDate = ref<string>('')
const toDate = ref<string>('')
const packageType = ref<string>('basic')
const adults = ref<number>(1)
const children = ref<number>(0)
const specialRequest = ref<string>('')
const errorMessage = ref<string>('')

// Function to check availability when the form is submitted
const checkAvailability = () => {
  if (!fromDate.value || !toDate.value) {
    errorMessage.value = 'Please select valid dates.'
    return
  }// Ensure at least one adult is selected
  if (adults.value < 1) {
    errorMessage.value = 'At least one adult is required.'
    return
  }

   // Simulate availability check (random in this case)
  const available = Math.random() > 0.5
  // Set error message if no availability
  if (!available) {
    errorMessage.value =
      'Sorry, this package is currently unavailable on your selected dates. Try adjusting your search.'
  } else {
    errorMessage.value = ''
    window.location.href = '/next-step'
  }
}
</script>

<template>
  <div class="container">
    <h1>Book your stay</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <div class="booking">
      <div class="image-container">
        <h2>Check availability</h2>
        <img :src="blueLagoon" alt="The Blue Lagoon" width="300" height="400" />
        <p class="image-text">The Blue Lagoon</p>
      </div>
      <!-- Form container -->
      <div class="form-container">
        <form @submit.prevent="checkAvailability">
             <!-- Date selection fields -->
          <div class="form-group">
            <label>From Date</label>
            <input type="date" v-model="fromDate" required />
          </div>

          <div class="form-group">
            <label>To Date</label>
            <input type="date" v-model="toDate" required />
          </div>
          <!-- Package selection -->
          <div class="form-group">
            <label>Choose Your Package</label>
            <select v-model="packageType">
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <!-- Adults and children number inputs -->
          <div class="form-group">
            <label>Adults</label>
            <input type="number" v-model.number="adults" min="1" required />
          </div>

          <div class="form-group">
            <label>Children</label>
            <input type="number" v-model.number="children" min="0" />
          </div>
          <!-- Special request input (optional) -->
          <div class="form-group">
            <label>Special Request (optional)</label>
            <input type="text" v-model="specialRequest" />
          </div>
          <!-- Button container with MainButton component -->
          <div class="button-container">
            <MainButton label="Continue" :width="'10rem'" @click="goHome" />
          </div>
        </form>
        <!-- Error message display -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/style/variables.scss';
.container {
  padding: 40px;
  background: $color-background-light;
}
p {
  width: 50%;
  margin: 20px 0;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.description {
  max-width: 600px;
  font-size: 1rem;
  color: #555;
}

.booking {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}
.image-container,
.form-container {
  width: 48%;
}

.image-container {
  display: inline-block;
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 15px;
    max-height: 400px;
  }
}
.image-text {
  position: absolute;
  bottom: 50%;
  height: 18%;
  width: 100%;
  text-align: right;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 0 0 15px 15px;
  box-sizing: border-box;
}

.form-container {
  background: #d1e7d3;
  padding: 25px;
  border-radius: 15px;
  width: 40%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  height: auto;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 5px;
}

input,
select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
}
button:hover {
  background: #a63d35;
}
</style>
