<script setup lang="ts">
import MainButton from './MainButton.vue';

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
});
</script>

<template>
  <div class="complete-your-booking">
    <section>
      <h5>{{ header }}</h5>
    <form>
      <label>
        <span class="input-label info">Name</span>
        <div class="input-field">
          <input class="text-input" text="name" placeholder="Full Name">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
    </label>
      <label>
        <span class="input-label info">Email address</span>
        <div class="input-field">
          <input class="text-input" text="name" placeholder="example@website.com">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
      </label>
      <label>
        <span class="input-label info">Phone number</span>
        <div class="input-field">
          <input class="text-input" text="name" placeholder="+00 000 00 00">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
      </label>
    </form>
  </section>
    <section>
      <h5>Payment options</h5>
      <form class="radios">
        <label>
          <input class="radio-input" type="radio" name="payment" value="credit">
          <span class="input-label info">Pay with credit card</span>
        </label>
        <label>
          <input class="radio-input" type="radio" name="payment" value="paypal">
          <span class="input-label info">Pay with PayPal</span>
        </label>
        <label>
          <input class="radio-input" type="radio" name="payment" value="arrival">
          <span class="input-label info">Pay on arrival</span>
        </label>
      </form>
    </section>
    <MainButton :label="label" :width="width" />
  </div>
</template>

<!-- Används så att importera först och sedan använd som
<PopupConfirmation header="rubriken" text="paragraph texten" label="knapptexten" width="önskad knappens bredd"/>  -->

<style scoped lang="scss">
.complete-your-booking {
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

.input-field {
  display: flex;
}

.text-input {
  border-radius: 10px;
  border: 2px solid $color-primary-dark;
  width: 50%;
  padding: 2px;
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
  padding: 20px;
}
.radio-input {
  margin: $margin-xsmall;
  width: 1.5rem;
  height: 1.5rem;
  accent-color: $color-error-red;
}

button {
  position: absolute;
  bottom: 20px;
  right: 17px;
}
</style>
