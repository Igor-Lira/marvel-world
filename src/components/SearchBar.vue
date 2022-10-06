<template>
  <div class="wrapper">
    <img class="search-icon" src="../../public/search.png" />
    <input
      class="search-input"
      type="text"
      name="serachHero"
      v-model="heroNameSearch"
      placeholder="Search a hero..."
      @keyup.enter="searchInApi(heroNameSearch)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    function searchInApi(search: any) {
      store.commit("searchInApi", search);
    }
    return {
      searchInApi,
      heroNameSearch: ref(""),
    };
  },
});
</script>

<style scoped>
.search-input {
  box-sizing: border-box;
  width: 250px;
  height: 30px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: transparent;
  color: white;
  padding-left: 10px;
  font: 400 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
}
.wrapper {
  position: relative;
}
.search-icon {
  width: 10%;
  position: absolute;
  bottom: 2px;
  left: 85%;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>
