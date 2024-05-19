<template>
  <div class="aside">
    <ul>
      <li><a href="#">Чаты</a></li>
      <li><a href="#">Транзакции</a></li>
      <li><a href="#">Антифрод</a></li>
      <li><a href="#">Связывание транзакций</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
