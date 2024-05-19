<template>
  <button :class="props.btnClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const name = ref<string>("my-button");

const props = defineProps({
  btnClass: {
    type: String,
    default: "btn",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  padding: 10px;
  border-radius: 10px;
  background: #9a9aff;
  transition: background-color 0.3s ease-in-out;
  opacity: 0.9;

  &:hover {
    color: var(--color-white);
    background-color: blue;
  }
}

.btnContainer {
  border: none;
  width: 70px;
  padding: 10px;
  border-radius: 10px;
  background: #e5e7eb;
  transition: background-color 0.3s ease-in-out;
  opacity: 0.9;

  &:hover {
    color: var(--color-white);
    background-color: blue;
  }

  &:focus {
    color: var(--color-white);
    background-color: blue;
  }
}
</style>
