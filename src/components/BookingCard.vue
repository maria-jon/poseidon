<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})

const emit = defineEmits(['updateChoice'])
const selectedOption = ref(null)

const fullName = ref(null)
const emailAddress = ref(null)
const phoneNumber = ref(null)

watch(selectedOption, newValue => {
  emit('updateChoice', newValue) // send payment selection to BookingView
})
</script>

<template>
  <div>
    <form class="complete-your-booking">
      <fieldset>
        <legend>
          <h5>{{ header }}</h5>
        </legend>
        <div class="texts">
          <label>
            <span class="input-label info">Name</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="Full Name" v-model="fullName" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
          <label>
            <span class="input-label info">Email address</span>
            <div class="input-field">
              <input
                type="email"
                text="name"
                placeholder="example@website.com"
                v-model="emailAddress"
              />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
          <label>
            <span class="input-label info">Phone number</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="+00 000 00 00" v-model="phoneNumber" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend><h5>Payment options</h5></legend>
        <div class="radios">
          <label>
            <input type="radio" value="credit" v-model="selectedOption" />
            <span class="input-label info">Pay with credit card</span>
          </label>
          <label>
            <input type="radio" value="paypal" v-model="selectedOption" />
            <span class="input-label info">Pay with PayPal</span>
          </label>
          <label>
            <input type="radio" value="arrival" v-model="selectedOption" />
            <span class="input-label info">Pay on arrival</span>
          </label>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style scoped lang="scss">
h5 {
  margin-bottom: $margin-small;
}

form {
  display: flex;
  flex-direction: column;
  gap: $margin-xsmall;
}

fieldset {
  border: none;
}

.texts {
  margin-left: 12px;
}

.input-field {
  display: flex;
}

input[type='text'],
input[type='email'] {
  border-radius: 8px;
  border: 2px solid $color-primary-dark;
  min-width: 70%;
  padding: 6px;
  background-color: $color-white;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  color: $color-primary-dark;
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  color: $color-primary-medium;
  font-size: 2rem;
}

.filled {
  font-variation-settings: 'FILL' 1;
}

.radios {
  background-color: $color-background-light;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: $margin-xsmall;
}

.radios > label {
  display: flex;
  align-items: center;
}

input[type='radio'] {
  margin: 6px;
  width: 2rem;
  height: 2rem;
  accent-color: $color-error-red;
}

button {
  align-self: flex-end;
}
</style>
