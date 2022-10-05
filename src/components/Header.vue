<template>
  <div class="header">
    <div class="img-wrapper">
      <img src="../../public/marvel-logo.png" alt="" />
    </div>
    <div class="routes">
      <div class="routes-links">Home</div>
      <div class="routes-links">Character</div>
      <div class="routes-links">Comic</div>
    </div>
    <!-- <h3>Marvel World</h3> -->
    <!-- <div class="topnav">
      <router-link class="home" :to="'/'" v-if="router.path !== '/'">
        Home
      </router-link>
      <SearchBar v-if="router.path === '/'" />
    </div> -->
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
// import SearchBar from "./SearchBar.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    // SearchBar,
  },
  setup() {
    const router = useRoute();
    return {
      router,
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}
.routes-links {
  margin-left: 35px;
}
</style>
