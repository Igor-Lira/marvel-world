<template>
  <div v-for="letter in alphabet" :key="letter">
    <a @click.prevent="requestAPI(letter)">{{ letter }}</a>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
export default {
  emits: ["search"],
  setup() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const store = useStore();
    function requestAPI(letter: string) {
      store.commit("searchInApi", letter);
    }
    return {
      alphabet,
      requestAPI,
    };
  },
};
</script>

<style scoped>
</style>