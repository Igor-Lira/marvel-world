<template>
  <input class="search-input" type="text" name="serachHero" v-model="heroNameSearch" placeholder="Search a hero.."
    @keyup.enter="searchInApi(heroNameSearch)" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    function searchInApi(search: any) {
      store.commit("searchInApi", search);
    }
    return {
      searchInApi
    }
  },
});
</script>

<style scoped>
@media(max-width: 400px) {
  .search-input {
    width: 100%;
    border: none;
  }
}
</style>