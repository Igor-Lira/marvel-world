<template>
  <div class="header">
    <div class="img-wrapper">
      <img src="../../public/marvel-logo.png" alt="" />
    </div>
    <div class="routes">
      <router-link class="w-1 routes-links" :to="'/'"> Home </router-link>
      <router-link class="w-2 routes-links" :to="'/hero'">
        Character
      </router-link>
      <router-link class="routes-links" :to="'/comic'"> Comic </router-link>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    // SearchBar,
  },
  setup() {
    const router = useRoute();

    function navigate() {}
    return {
      router,
      navigate,
    };
  },
});
</script>

<style>
.header {
  height: 150px;
  background: linear-gradient(180deg, #030303 0%, rgba(3, 3, 3, 0) 75.26%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.img-wrapper {
  margin-left: 5%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
.img-wrapper > img {
  width: 120px;
}

.routes {
  flex-grow: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font: 400 24px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  letter-spacing: 1px;
}
.routes-links {
  position: relative;
  margin-left: 5%;
}

.router-link-active::before {
  content: "";
  display: inline;
  position: absolute;
  left: 50%;
  top: 28px;
  height: 4px;
  width: 100%;
  transform: skew(-12deg) translateX(-50%);
  background: red;
  z-index: -1;
}
</style>
<style scoped>
a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>
