<template>
  <div v-if="infoHeroes.data">
    <router-view></router-view>
    <div class="centered">
      <label class="searchSlot" for="searchHero"> Search for a Hero! </label>
      <input
        name="serachHero"
        v-model="heroNameSearch"
        placeholder="my favorite hero ..."
      />
      <input
        type="button"
        name="btn-search"
        value="search"
        @click="searchInApi(heroNameSearch)"
      />
      <div>
        <ul>
          <li class="letter" v-for="letter in alphabet" :key="letter">
            <u class="link" @click="searchInApi(letter)"> {{ letter }} </u>
          </li>
        </ul>
      </div>
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
    <div class="left-info"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import card from "../src/components/card.vue";
import Request from "../utils/Request";

export default defineComponent({
  components: {
    card,
  },
  computed: {
    allInfoAvailable: function () {
      return (heroData: any) => {
        return (
          heroData.description &&
          heroData.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
        );
      };
    },
  },
  setup() {
    const heroNameSearch = ref("");
    let infoHeroes = reactive({}) as any;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const request = new Request();
    request.getApiData((apiData: any) => {
      infoHeroes.data = apiData;
    });
    function searchInApi(letter: string) {
      const search = letter ? letter : heroNameSearch.value;
      request.searchInApi((apiData: any) => {
        infoHeroes.data = apiData;
      }, search);
    }
    return {
      alphabet,
      infoHeroes,
      heroNameSearch,
      searchInApi,
    };
  },
});
</script>

<style scoped>

.centered {
  text-align: center;
}
.letter {
  display: inline;
  list-style-type: none;
}
.conteiner {
  box-sizing: border-box;
  list-style-type: none;
}
.container-cards {
  display: inline;
  float: left;
  width: 25%;
  padding: 0 10px;
}
.link {
  padding: 5px 10px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.searchSlot {
  font-size: 20px;
  font-weight: bold;
  color: #1abc9c;
}
</style>
