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

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import axios from "axios";
import card from "./components/card.vue";
import md5Generator from "../utils/md5";

export default defineComponent({
  components: {
    card
  },
  computed: {
    allInfoAvailable: function () {
      return (heroData: any) => {
        return heroData.description &&
          heroData.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
      };
    },
  },
  setup() {
    interface ServerData {
      data: any;
    }
    const heroNameSearch = ref("hero");
    let infoHeroes = reactive({}) as any;

    const ts = new Date().getTime();
    const key = md5Generator(ts.toString());
    const route = "characters";
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/${route}?ts=${ts}&apikey=e49bea4a6ee3e35352198237a08be003&hash=${key}`;
   // console.log(urlMarvel);
    async function getApiData() {
      await axios
        .request<ServerData>({
          method: "get",
          url: urlMarvel,
        })
        .then((apiData) => {
          infoHeroes.data = apiData.data.data.results;
        });
    }
    getApiData();
    function showHeroeInfo(data: any) {
      console.log(data);
      //displayInfo = true;
    }
    async function searchInApi() {
     // console.log(heroNameSearch.value);
      await axios
        .request<ServerData>({
          method: "get",
          url: urlMarvel,
          params: {
            nameStartsWith: heroNameSearch.value,
          },
        })
        .then((apiData) => {
          infoHeroes.data = apiData.data.data.results;
        });
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
