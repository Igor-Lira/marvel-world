<template>
  <div v-if="infoHeroes.data">
    <div class="header">
      <h1>Marvel World</h1>
      <label for="searchHero"> Search for a Hero! </label>
      <input
        name="serachHero"
        v-model="heroNameSearch"
        placeholder="Your favourite Hero!"
      />
      <input
        type="button"
        name="btn-search"
        value="search"
        @click="searchInApi"
      />
    </div>
    <ul class="container">
      <li
        v-for="heroData in infoHeroes.data"
        :key="heroData.id"
        class="container-cards"
      >
        <card v-if="allInfoAvailable(heroData)" :heroData="heroData" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import axios from "axios";
import card from "./components/card.vue";
import md5Generator from "../utils/md5";

export default defineComponent({
  components: {
    card,
  },
  computed: {
    allInfoAvailable: function () {
      return (heroData) =>
        heroData.description &&
        heroData.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
    },
  },
  setup() {
    const heroNameSearch = ref("hero");
    let infoHeroes = reactive({});

    const ts = new Date().getTime();
    const key = md5Generator(ts);
    const route = "characters";
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/${route}?ts=${ts}&apikey=e49bea4a6ee3e35352198237a08be003&hash=${key}`;

    async function getApiData() {
      const apiData = await axios({
        method: "get",
        json: true,
        url: urlMarvel,
      });
      infoHeroes.data = apiData.data.data.results;
    }
    getApiData();
    function showHeroeInfo(data) {
      console.log(data);
      //displayInfo = true;
    }
    async function searchInApi() {
      console.log(heroNameSearch.value);
      const apiData = await axios({
        params: {
          nameStartsWith: heroNameSearch.value,
        },
        method: "get",
        json: true,
        url: urlMarvel,
      });
      infoHeroes.data = apiData.data.data.results;
    }
    return {
      infoHeroes,
      showHeroeInfo,
      heroNameSearch,
      searchInApi,
    };
  },
});
</script>

<style scoped>
.header {
  text-align: center;
}
.conteiner {
  list-style-type: none;
}
.container-cards {
  display: inline-block;
}
</style>
