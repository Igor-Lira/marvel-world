<template>
  <div v-if="infoHeroes.data">
    <router-view></router-view>
    <Alphabet @search="searchInApi" />
    <div class="container">
      <div
        v-for="heroData in infoHeroes.data"
        :key="heroData.id"
        class="container-cards"
      >
        <card v-if="allInfoAvailable(heroData)" :heroData="heroData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "@vue/runtime-core";
import card from "../src/components/card.vue";
import Alphabet from "../src/components/Alphabet.vue";
import Request from "../utils/Request";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    card,
    Alphabet,
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
    const store = useStore();

    const heroNameSearch = ref("");
    let infoHeroes = reactive({}) as any;

    const request = new Request();
    request.getApiData((apiData: any) => {
      infoHeroes.data = apiData;
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
      heroNameSearch,
      searchInApi,
    };
  },
});
</script>

<style scoped>
* {
  text-align: center;
}
.alphabet {
  display: inline;
  list-style-type: none;
}
.container {
  display: flex;
  flex-wrap: wrap;
}

.container :first-child {
  align-self: center;
}

.link {
  padding: 0px 5px;
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
