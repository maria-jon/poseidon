<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})

const cardName = ref('')
const cardNumber = ref('')
const cardDate = ref('')
const cardCvc = ref('')

function submitForm() {
  console.log(cardName.value)
  console.log(cardNumber.value)
  console.log(cardDate.value)
  console.log(cardCvc.value)
}
</script>

<template>
  <form class="credit-card-payment" v-on:submit.prevent="submitForm">
    <fieldset>
      <legend>
        <h5>{{ header }}</h5>
      </legend>
      <div class="texts">
        <label>
          <span class="input-label info">Name on card</span>
          <div class="input-field">
            <input type="text" text="name" placeholder="Full Name" v-model="cardName" />
            <span class="material-symbols-outlined filled"> info </span>
          </div>
        </label>
        <label>
          <span class="input-label info">Credit card number</span>
          <div class="input-field">
            <input type="text" text="name" placeholder="0000 0000 0000 0000" v-model="cardNumber" />
            <span class="material-symbols-outlined filled"> info </span>
          </div>
        </label>
        <div class="numbers">
          <label>
            <span class="input-label info">Expiration date</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="MM/YY" v-model="cardDate" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
          <label>
            <span class="input-label info">CVC</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="000" v-model="cardCvc" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
        </div>
      </div>
    </fieldset>
  </form>
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

input[type='text'] {
  border-radius: 8px;
  border: 2px solid $color-primary-dark;
  min-width: 60%;
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

.numbers {
  display: flex;
  gap: $margin-medium;
}

.numbers > label {
  max-width: 30%;
}

button {
  align-self: flex-end;
}
</style>
