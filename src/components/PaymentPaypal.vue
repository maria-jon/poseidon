<script setup lang="ts">
import MainButton from './MainButton.vue'
import { ref } from 'vue';

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})

const paypalEmail = ref('');

function submitForm() {
  console.log(paypalEmail.value);
}

</script>

<template>
  <form class="paypal-payment" v-on:submit.prevent="submitForm">
    <fieldset>
      <legend>
        <h5>{{ header }}</h5>
      </legend>
      <div class="texts">
        <label>
          <span class="input-label info">Email address</span>
          <div class="input-field">
            <input type="email" text="name" placeholder="example@website.com" v-model="paypalEmail" />
          </div>
        </label>
        <p class="info">You will be redirected to Paypal to complete your payment.</p>
      </div>
    </fieldset>
    <MainButton :label="label" :width="width" />
  </form>
</template>

<style scoped lang="scss">
.paypal-payment {
  box-sizing: border-box;
  position: fixed;
  background-color: $color-primary-light;
  border-radius: 8px;
  width: 24rem;
  max-width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: $margin-small;
}

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

input[type='email'] {
  border-radius: 8px;
  border: 2px solid $color-primary-dark;
  min-width: 80%;
  padding: 6px;
  background-color: $color-white;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  color: $color-primary-dark;
}

p {
  margin-top: $margin-small;
}

button {
  align-self: flex-end;
}
</style>
