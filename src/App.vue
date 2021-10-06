<template>
  <div v-if="infoHeroes.data">
    <h2>Heroes</h2>
    <li v-for="hero in infoHeroes.data" :key="hero.id">
      <card
        :heroData= "hero"
      />
    </li>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import axios from "axios";
import card from './components/card.vue'

export default defineComponent({
  components: {
    card
  },
  setup() {
    let infoHeroes = reactive({});
    async function getApiData() {
      const urlMarvel = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e49bea4a6ee3e35352198237a08be003&hash=d375cf48c02740a120d568907be5203b`;
      const apiData = await axios({
        method: "get",
        json: true,
        url: urlMarvel,
      });
      infoHeroes.data = apiData.data.data.results;
    }
    getApiData();
    function showHeroeInfo(data){
      console.log (data);
      //displayInfo = true;
    }
    return {
      infoHeroes,
      showHeroeInfo,
    };
  },
});
</script>

<style>
</style>