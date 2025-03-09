<script setup lang="ts">
import MainButton from './MainButton.vue'

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
})
</script>

<template>
  <form class="credit-card-payment">
    <fieldset>
      <legend>
        <h5>{{ header }}</h5>
      </legend>
      <div class="texts">
        <label>
          <span class="input-label info">Name on card</span>
          <div class="input-field">
            <input type="text" text="name" placeholder="Full Name" />
            <span class="material-symbols-outlined filled"> info </span>
          </div>
        </label>
        <label>
          <span class="input-label info">Credit card number</span>
          <div class="input-field">
            <input type="text" text="name" placeholder="0000 0000 0000 0000" />
            <span class="material-symbols-outlined filled"> info </span>
          </div>
        </label>
        <div class="numbers">
          <label>
            <span class="input-label info">Expiration date</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="MM/YY" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
          <label>
            <span class="input-label info">CVC</span>
            <div class="input-field">
              <input type="text" text="name" placeholder="000" />
              <span class="material-symbols-outlined filled"> info </span>
            </div>
          </label>
        </div>
      </div>
    </fieldset>
    <MainButton :label="label" :width="width" />
  </form>
</template>

<style scoped lang="scss">
.credit-card-payment {
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
