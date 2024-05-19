<template>
  <div class="wrapper">
    <div class="aside">
      <ul>
        <li><a href="#">Чаты</a></li>
        <li><a href="#">Транзакции</a></li>
        <li><a href="#">Антифрод</a></li>
        <li><a href="#">Связывание транзакций</a></li>
      </ul>
    </div>
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
          <tr v-for="user in users" :key="user.id">
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
  </div>
</template>

<script lang="ts" setup>
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

  .aside {
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    background: white;

    ul {
      list-style-type: none;

      li {
        margin-top: 20px;

        a {
          cursor: pointer;
          color: rgb(37 99 235);
          text-decoration: none;
        }

        a:hover {
          color: black;
        }

        a:focus {
          color: black;
        }
      }

      li:first-child {
        margin-top: 0;
      }
    }
  }

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
}
</style>
