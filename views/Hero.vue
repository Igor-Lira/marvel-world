<template>
  <div>
        <h1>{{ heroData.data.name }}</h1>
    <div class="hero-info">
      <img class="hero-image" :src="imageURL" width="300" height="350" />
      <div class="hero-description">
        <p> {{ description }} </p>
        <button type="button" v-show="comics.length" @click="updateUserChoice('comics')"> Comics </button>
        <button type="button" v-show="series.length" @click="updateUserChoice('series')"> Series </button>
        <button type="button" v-show="stories.length" @click="updateUserChoice('stories')"> Stories </button>
      </div>
      <div class="hero-general-content">
        <div v-if="userChoice.value == 'comics'">
          <div v-show="comics.length">
            <h2>Comics</h2>
            <ul>
              <li v-for="comic in comics" :key="comic.resourceURI">
                <router-link :to="{path: '/comic', query: {url: comic.resourceURI}}"
                  >{{ comic.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="userChoice.value == 'series'">
          <div v-show="series.length">
            <h2>Series</h2>
            <ul>
              <li v-for="serie in series" :key="serie.resourceURI">
                <router-link :to="serie.resourceURI">{{ serie.name }} </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="userChoice.value == 'stories'">
          <div v-show="stories.length">
            <h2>Stories</h2>
            <ul>
              <li v-for="story in stories" :key="story.resourceURI">
                <router-link :to="story.resourceURI">{{ story.name }} </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>Chose your content</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Request  from "../utils/Request";
import { reactive, computed } from "vue";

import { useRoute } from "vue-router";

export default {
  setup() {
    const heroData = reactive({}) as any;
    const route = useRoute();
    const userChoice = reactive({ value: "comics" });
    const request = new Request(route.query.url?.toString());
    request.searchInApi((apiData: any) => {
      heroData.data = apiData[0];
    });
    const imageURL = computed(
      () =>
        heroData.data.thumbnail.path + "." + heroData.data.thumbnail.extension
    );
    const description = computed(() => heroData.data.description);
    const comics = computed(() => heroData.data.comics.items);
    const series = computed(() => heroData.data.series.items);
    const stories = computed(() => heroData.data.stories.items);
    const updateUserChoice = (choice: string) => {
      userChoice.value = choice;
    }

    return {
      heroData,
      description,
      imageURL,
      comics,
      series,
      stories,
      userChoice,
      updateUserChoice
    };
  },
};
</script>

<style scoped>
.hero-image {
  display: inline-block;
  padding: 10px;
}
.hero-description {
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  margin-top: 50px;
  overflow: hidden;
  width: 30%;
  height: 200px;
  padding: 10px;
}
.hero-general-content {
  white-space: normal;
  display: inline-block;
  vertical-align: top;
  overflow-y: scroll;
  width: 30%;
  height: 300px;
  padding: 30px;
}
.general-content {
  padding: 5px 5px;
}
</style>