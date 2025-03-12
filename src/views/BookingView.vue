<script setup lang="ts">
import StayBooking from '@/components/StayBooking.vue'

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})
</script>

<template>
  <div>
    <StayBooking />
  </div>
</template>

<style scoped lang="scss">
main {
  margin-bottom: 600px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
</style>
