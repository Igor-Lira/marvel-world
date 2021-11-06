<template>
  <input
    type="text"
    name="serachHero"
    v-model="heroNameSearch"
    placeholder="Search a hero.."
    @keyup.enter="searchInApi(heroNameSearch)"
  />
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
/** Search Bar CSS: https://www.w3schools.com/howto/howto_css_searchbar.asp */
/* Style the search box inside the navigation bar */
.topnav input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .topnav a,
  .topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>