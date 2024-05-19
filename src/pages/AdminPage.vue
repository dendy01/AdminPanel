<template>
  <div class="wrapper">
    <AdminAside />
    <AdminContainer :users="users" />
  </div>
</template>

<script setup lang="ts">
import AdminAside from "../components/admin/AdminAside.vue";
import AdminContainer from "../components/admin/AdminContainer.vue";
import { ref } from "vue";

interface User {
  id: number;
  nickname: string;
  status: string;
  relatedOperation: number;
  chat: string;
  statusForSupport: string;
}

const users = ref<User[]>([
  {
    id: 1,
    nickname: "Tim",
    status: "Успех",
    relatedOperation: 1,
    chat: "Tim",
    statusForSupport: "Подтверждено клиентом",
  },
  {
    id: 2,
    nickname: "Tommi",
    status: "Успех",
    relatedOperation: 2,
    chat: "Tommi",
    statusForSupport: "Подтверждено клиентом",
  },
  {
    id: 3,
    nickname: "Jeck",
    status: "Ошибка",
    relatedOperation: 3,
    chat: "Jeck",
    statusForSupport: "Подтверждено клиентом",
  },
  {
    id: 4,
    nickname: "Marry",
    status: "Успех",
    relatedOperation: 4,
    chat: "Marry",
    statusForSupport: "Подтверждено support",
  },
]);
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  display: flex;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: #e5e7eb;
}
</style>
