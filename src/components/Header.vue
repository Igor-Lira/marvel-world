<template>
  <div class="header">
    <h3>Marvel World</h3>
    <div class="topnav">
      <router-link class="home" :to="'/'" v-if="router.path !== '/'">
        Home
      </router-link>
      <SearchBar v-if="router.path === '/'" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import SearchBar from "./SearchBar.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    SearchBar,
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
  padding: 2px;
  text-align: center;
  background: #390003;
  color: white;
  font-size: 25px;
}
</style>
