<template>
  <div class="header">
    <h3>Marvel World</h3>
     <router-link class="home" :to="'/'"> Home </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 2px;
  text-align: center;
  background: #ff4d4d;
  color: white;
  font-size: 25px;
}
.home {
  color: white;
  font-size: 20px;
}

</style>>
