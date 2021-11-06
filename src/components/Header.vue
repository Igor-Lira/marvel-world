<template>
  <div class="header">
    <h3>Marvel World</h3>
    <div class="topnav">
      <router-link class="home" :to="'/'"  v-if="router.path !=='/'"> Home </router-link>
      <SearchBar v-if="router.path==='/'"/>
      <Alphabet v-if="router.path==='/'"/>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import SearchBar from "./SearchBar.vue";
import Alphabet from "./Alphabet.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    SearchBar,
    Alphabet,
  },
  setup() {
    const router = useRoute();
    return {
      router
    };
  },
});
</script>

<style>
.header {
  padding: 2px;
  text-align: center;
  background: #b22222;
  color: white;
  font-size: 25px;
}
/** Search Bar CSS: https://www.w3schools.com/howto/howto_css_searchbar.asp */

/* Add a black background color to the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #dc143c;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the "active" element to highlight the current page */
.topnav a.active {
  background-color: #2196f3;
  color: white;
}
</style>
