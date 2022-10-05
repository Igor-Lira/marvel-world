<template>
  <div class="header">
    <router-link to="/" class="img-wrapper">
      <img src="../../public/marvel-logo.png" alt="" />
    </router-link>
    <div class="routes">
      <router-link class="w-1 routes-links" :to="'/'"> Home </router-link>
      <div
        class="w-2 routes-links"
        :class="[router.path === '/hero' ? 'router-link-active' : '']"
      >
        Character
      </div>
      <div
        class="routes-links"
        :class="[router.path === '/comic' ? 'router-link-active' : '']"
      >
        Comic
      </div>
    </div>
    <div class="search-component" v-if="router.path === '/'">
      <SearchBar />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import SearchBar from "./SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
  setup() {
    const router = useRoute();
    console.log(router.path);
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
  flex-grow: 3;
  padding: 0 18px 0 12px;
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

.routes-links.router-link-active::before {
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

.search-component {
  flex-grow: 1;
  display: flex;
  justify-content: center;
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
