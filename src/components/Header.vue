<template>
  <div class="header">
    <h1>Marvel World</h1>
  </div>
  <router-link class="home" :to="'/'"> Home </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 2px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 25px;
}
.home {
  text-align: "left";
  font-size: 20px;
}

</style>>
