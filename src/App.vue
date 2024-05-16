<template>
  <h1>{{ getEvenNumbers() }}</h1>
  <MyButton>Добавить</MyButton>
</template>

<script setup lang="ts">
const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

const getEvenNumbers = () => {
  const eventNum: number[] = [];

  numbers.map((number) => {
    if (number % 2 === 0) {
      eventNum.push(number);
    }
  });

  return eventNum;
};
</script>
