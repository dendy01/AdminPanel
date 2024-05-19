<template>
  <div class="container">
    <div class="amount__of__funds"></div>
    <table class="table">
      <thead>
        <tr>
          <th>Никнейм</th>
          <th>id</th>
          <th>Статус</th>
          <th>Связанные транзакции</th>
          <th>Чат с клиентом</th>
          <th>Статусы для поддержки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in props.users" :key="user.id">
          <td>{{ user.nickname }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.relatedOperation }}</td>
          <td>
            <MyButton :btnClass="'btnContainer'">{{ user.chat }}</MyButton>
          </td>
          <td>{{ user.statusForSupport }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  users: {
    type: [Array, Object],
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-left: 30px;
  border-radius: 20px;
  padding: 20px;
  background: white;

  .amount__of__funds {
    border: 2px solid red;
  }

  .table {
    border-spacing: 0px;
    border-collapse: collapse;
    border: 2px solid teal;

    thead th,
    tbody td {
      width: 200px;
      padding: 20px;
      text-align: center;
      border-left: 3px solid green;
    }

    tbody td {
      border-top: 3px solid green;
    }

    thead th:first-child {
      border-left: none;
    }

    tbody td:first-child {
      border-left: none;
    }
  }
}
</style>
