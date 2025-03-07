<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import PopupConfirmation from '@/components/PopupConfirmation.vue'
import BookingCard from '@/components/BookingCard.vue';
import PaymentCard from '@/components/PaymentCard.vue';
</script>

<template>
  <HeaderBar />
  <BookingCard
    header="Complete your booking"
    label="Continue"
    width="120px"
  />
  <PaymentCard
    header="Credit card payment"
    label="Confirm booking"
    width="200px"
  />
  <PopupConfirmation
    header="Congratulations!"
    text="Your selected package is available. Click ‘Continue’ to finalize your reservation."
    label="Continue"
    width="200px"
  />
</template>

<style></style>
