<script setup lang="ts">
import PopupConfirmation from '@/components/PopupConfirmation.vue'
import BookingCard from '@/components/BookingCard.vue'
import PaymentCard from '@/components/PaymentCard.vue'
import PaymentPaypal from '@/components/PaymentPaypal.vue'
import MainButton from '@/components/MainButton.vue'

import { ref } from 'vue';


const currentStep = ref(1);
const userChoice = ref(null);

const handleSelection = (newValue: any) => {
  userChoice.value = newValue;
};

const nextStep = () => {
  if (currentStep.value === 1 && !userChoice.value) {
    console.warn('no selection');
  }; // Prevent skipping Step 1 without selection
  currentStep.value++;
  console.log(userChoice.value);
};

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})
</script>

<template>
  <main>
    <div class="booking">
    <BookingCard header="Complete your booking" label="Continue" width="120px" v-if="currentStep === 1" @updateChoice="handleSelection" />
    <PaymentCard header="Credit card payment" label="Confirm booking" width="200px" v-if="currentStep === 2 && userChoice === 'credit'" />
    <PaymentPaypal header="PayPal payment" label="Continue" width="200px" v-if="currentStep === 2 && userChoice === 'paypal'" />

    <PopupConfirmation
    header="Confirmation"
    text="Thank you! Your underwater adventure awaits. We have sent your booking details to your email."
    label="Close"
    width="150px"
    v-if="currentStep === 3 || (currentStep === 2 && userChoice === 'arrival')"
    />

    <MainButton label="continue" :width="width"
    @click="nextStep"
    v-if="(currentStep === 1 && userChoice) || currentStep > 1"
    />
    </div>
  </main>

  <!-- <PopupConfirmation
    header="We are sorry!"
    text="This package is currently unavailable on your selected dates. Try adjusting your search."
    label="Close"
    width="150px"
  /> -->
  <!-- <PopupConfirmation
    header="Congratulations!"
    text="Your selected package is available. Click ‘Continue’ to finalize your reservation."
    label="Continue"
    width="150px"
  /> -->
</template>


<style scoped lang="scss">
main {
  /* margin-bottom: 600px; */
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.booking {
  box-sizing: border-box;
  background-color: $color-primary-light;
  border-radius: 8px;
  width: 24rem;
  max-width: 90%;

  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: $margin-small;
}

h5 {
  margin-bottom: $margin-small;
}

button {
  align-self: flex-end;
}
</style>
