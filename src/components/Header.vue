<template>
  <div class="header">
    <h3>Marvel World</h3>
    <div>
    <router-link class="home" :to="'/'"> Home </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 2px;
  text-align: center;
  background: #dc143c;
  color: white;
  font-size: 25px;
}
.home {
  color: white;
  font-size: 20px;
}
</style>>
