<script setup lang="ts">
import PopupConfirmation from '@/components/PopupConfirmation.vue'
import BookingCard from '@/components/BookingCard.vue'
import PaymentCard from '@/components/PaymentCard.vue'
import PaymentPaypal from '@/components/PaymentPaypal.vue'
import MainButton from '@/components/MainButton.vue'
import StayBooking from '@/components/StayBooking.vue'

import { ref, computed } from 'vue'

const currentStep = ref(0)
const userChoice = ref(null)

const handleSelection = (newValue: any) => {
  userChoice.value = newValue
}

/* Variable currentStep keeps track of progress
 ** Last step occurs when currentStep reaches 3
 */
const nextStep = () => {
  if (currentStep.value === 1 && !userChoice.value) {
    console.warn('no user selection for payment')
  }

  if (userChoice.value === 'arrival') {
    currentStep.value++ // adds extra count to currentStep to make it go to the last step
  }
  currentStep.value++
}

const lastStep = computed(() => {
  return currentStep.value > 2
})

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})
</script>

<template>
  <main>
    <StayBooking
    v-if="currentStep < 1"/>

    <div class="booking" v-if="currentStep >= 1 && currentStep <= 3">
      <PopupConfirmation
      header="Congratulations!"
      text="Your selected package is available. Click 'Continue' to finalize your reservation."
      label="Continue"
      width="150px"
      v-if="currentStep === 1"
      />
      <BookingCard header="Complete your booking" label="Continue" width="120px" v-if="currentStep === 2" @updateChoice="handleSelection" />
      <PaymentCard header="Credit card payment" label="Confirm booking" width="200px" v-if="currentStep === 3 && userChoice === 'credit'" />
      <PaymentPaypal header="PayPal payment" label="Continue" width="200px" v-if="currentStep === 3 && userChoice === 'paypal'" />

      <PopupConfirmation
      header="Confirmation"
      text="Thank you! Your underwater adventure awaits. We have sent your booking details to your email."
      label="Close"
      width="150px"
      v-if="currentStep === 4 || (currentStep === 3 && userChoice === 'arrival')"
      />

    <!-- Use button here instead of buttons on components -->
    <MainButton
      label="continue"
      :width="width"
      @click="nextStep"
      v-if="currentStep >= 1 && currentStep <= 3"
      :disabled="currentStep === 2 && !userChoice"
      />
    <!-- During last step, user will be redirected to home page -->
    <a href="/" v-if="lastStep">
        <MainButton
        label="continue"
        :width="width"
        />
      </a>
    </div>
  </main>

   <PopupConfirmation
    header="We are sorry!"
    text="This package is currently unavailable on your selected dates. Try adjusting your search."
    label="Close"
    width="150px"
  />
</template>

<style scoped lang="scss">
main {
  margin-bottom: 600px;
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

button,
a {
  align-self: flex-end;
}
</style>
