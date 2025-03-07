<script setup lang="ts">
import MainButton from './MainButton.vue';

defineProps({
  header: { type: String, required: true },
  label: String,
  width: String,
});
</script>

<template>
  <dialog open="true">
    <h5>{{ header }}</h5>
    <form>
      <label>
        <span class="input-label info">Name</span>
        <div class="input-field">
          <input text="name" placeholder="Full Name">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
    </label>
      <label>
        <span class="input-label info">Email address</span>
        <div class="input-field">
          <input text="name" placeholder="example@website.com">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
      </label>
      <label>
        <span class="input-label info">Phone number</span>
        <div class="input-field">
          <input text="name" placeholder="+00 000 00 00">
          <span class="material-symbols-outlined filled">
            info
          </span>
        </div>
      </label>
    </form>
    <MainButton :label="label" :width="width" />
  </dialog>
</template>

<!-- Används så att importera först och sedan använd som
<PopupConfirmation header="rubriken" text="paragraph texten" label="knapptexten" width="önskad knappens bredd"/>  -->

<style scoped lang="scss">
dialog {
  box-sizing: border-box;
  position: fixed;
  background-color: $color-primary-light;
  border-radius: 8px;
  border: none;
  width: 24rem;
  max-width: 90%;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 24px;
  padding-top: 24px;
}

h5 {
  margin-bottom: 32px;
}

form {
  display: flex;
  flex-direction: column;
  gap: $margin-xsmall;
}

.input-field {
  display: flex;
}

input {
  border-radius: 10px;
  border: 2px solid $color-primary-dark;
  width: 200px;
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  color: $color-primary-medium;
  font-size: 2rem;
}

.filled {
  font-variation-settings: 'FILL' 1;
}

button {
  position: absolute;
  bottom: 20px;
  right: 17px;
}
</style>
