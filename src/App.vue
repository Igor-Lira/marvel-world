<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Marvel Universe`
    }}</template>
  </metainfo>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import Header from "./components/Header.vue";
import { useMeta } from "vue-meta";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    useMeta({
      title: "Marvel Universe",
      description: `Exploring Marvel Developer Public API in a Single Page Aplication built with VueJs`,
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      ],
    });
  },
});
</script>

<style>
body {
  background: #1a1a1a;
}
</style>
