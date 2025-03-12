<script setup lang="ts">
import blueLagoon from '@/assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg.jpg'
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
  } // Ensure at least one adult is selected
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
        <h5>Check availability</h5>
        <form @submit.prevent="checkAvailability">
          <!-- Date selection fields -->
          <div class="data-container">
            <div class="form-group">
              <label>From Date
                <input type="date" v-model="fromDate" required />
              </label>
            </div>

            <div class="form-group">
              <label>To Date
                <input type="date" v-model="toDate" required />
              </label>
            </div>
          </div>
          <!-- Package selection -->
          <div class="form-group">
            <label>Choose Your Package</label>
            <select v-model="packageType">
              <option value="basic">Ines</option>
              <option value="premium">The Siren</option>
              <option value="premium">Poseidon’s Temple</option>
              <option value="premium">The Blue Lagoon</option>
            </select>
          </div>
          <!-- Adults and children number inputs -->
          <p>Number of guests</p>
          <div class="guest-container">
            <div class="form-group">
              <label
                ><span class="guest-label">Adults</span>
                <input type="number" v-model.number="adults" min="1" required />
              </label>
            </div>

            <div class="form-group">
              <label
                ><span class="guest-label">Children</span>
                <input type="number" v-model.number="children" min="0" />
              </label>
            </div>
          </div>
          <!-- Special request input (optional) -->
          <div class="form-group">
            <label>Special Request (optional)
              <input type="text" v-model="specialRequest" />
            </label>
          </div>
          <!-- Button container with MainButton component -->
          <div class="button-container">
            <MainButton label="Continue" :width="'10rem'" @click="checkAvailability" />
          </div>
        </form>
        <!-- Error message display -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  padding: 40px;
  background: $color-background-light;
  font-weight: 400;
  text-align: left;
}

p {
  width: 50%;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 100%; // Full width on smaller screens
  }
}
// Heading styles
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
// Description text styling
.description {
  max-width: 600px; // Limits text width for better readability
  font-size: 1rem;
  color: #000;
}
// Booking section layout
.booking {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column; // Stack elements on smaller screens
    align-items: center;
  }
}
// Layout for form and image container
.image-container,
.form-container {
  width: 48%;
}
// Image container styles
.image-container {
  position: relative;
  flex: 1;
  max-width: 48%;
  min-width: 380px;

  @media (max-width: 1024px) {
    max-width: 100%; // Full width on smaller screens
  }
}
// Image styling
img {
  width: 100%;
  height: 100%;
  min-height: 400px; // Ensures image has a minimum height
  border-radius: 15px;
  display: block;
  object-fit: cover; // Ensures image covers the container properly
}

// Overlay text on image
.image-text {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6); // Dark overlay for readability
  padding: 10px 10px;
  border-radius: 10px;
  text-align: right;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  margin-bottom: 0;
  height: 100px;
}
// Form container styling
.form-container {
  flex: 1;
  background: $color-primary-light;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 350px;
  max-width: 500px;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 100%; 
  }

}
// Form title styling
h5 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-family: 'Montserrat' sans-serif;
  font-weight: 600;
}
p {
  font-weight: 400;
  font-size: 1rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}
// Form group styling
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  text-transform: uppercase; // Capitalizes text inside form groups
}
// Layout for date input fields
.data-container {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  gap: 10px;
}

.data-container label {
  text-align: center;
}

.guest-container input {
  width: 100px;
}

.guest-label {
  display: inline-block;
  width: 100px;
}
// Guest container label styling
.guest-container label {
  text-transform: none;
  font-size: 1em;
}

label {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}
// Input and select styles
input,
select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
}
// Button container styling
.button-container {
  display: flex;
  justify-content: flex-end; // Aligns the button to the right
  width: 100%;
  margin-top: auto;
}
</style>
