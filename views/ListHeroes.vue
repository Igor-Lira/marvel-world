<template>
  <div v-if="infoHeroes.data" class="hero-list-container">
    <div class="line"></div>
    <router-view></router-view>
    <div class="container" v-if="HeroesWithAllInfoAvailable.length">
      <div
        v-for="heroData in HeroesWithAllInfoAvailable"
        :key="heroData.id"
        class="container-cards"
      >
        <Card :heroData="heroData" />
      </div>
    </div>
    <div v-else>No results found</div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watchEffect,
} from "@vue/runtime-core";
import Card from "../src/components/Card.vue";
import Request from "../utils/Request";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const store = useStore();

    const heroNameSearch = ref("");
    let infoHeroes = reactive({}) as any;

    const request = new Request();

    const HeroesWithAllInfoAvailable = computed(() => {
      return infoHeroes.data.filter((heroData: any) => {
        return (
          heroData.description &&
          heroData.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
        );
      });
    });
    watchEffect(() => {
      searchInApi(store.state.search);
    });

    function searchInApi(letter: string) {
      const search = letter ? letter : heroNameSearch.value;
      request.searchInApi((apiData: any) => {
        infoHeroes.data = apiData;
      }, search);
    }
    return {
      infoHeroes,
      HeroesWithAllInfoAvailable,
      heroNameSearch,
      searchInApi,
    };
  },
});
</script>

<style scoped>
*,
body {
  text-align: center;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
