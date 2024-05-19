<template>
  <h1>Укажите ваш статус</h1>
  <MyButton @click="$router.push('/user')">Пользователь</MyButton>
  <MyButton @click="$router.push('/admin')">Администратор</MyButton>
</template>
