<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {},
});
</script>

<style>
body {
  background: #1a1a1a;
}
</style>
