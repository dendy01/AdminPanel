<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref<string>("my-button");
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
</style>
