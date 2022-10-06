<template>
  <div v-if="heroData.data" class="container">
    <div class="hero-card">
      <div class="hero-name">{{ name }}</div>
      <div class="hero-image">
        <img :src="imageURL" />
        <div class="buttons-mavel-list">
          <button
            :class="[userChoice.value == 'comics' ? 'active' : '']"
            type="button"
            v-show="comics.length"
            @click="updateUserChoice('comics')"
          >
            Comics
          </button>
          <button
            :class="[userChoice.value == 'series' ? 'active' : '']"
            type="button"
            v-show="series.length"
            @click="updateUserChoice('series')"
          >
            Series
          </button>
          <button
            :class="[userChoice.value == 'stories' ? 'active' : '']"
            type="button"
            v-show="stories.length"
            @click="updateUserChoice('stories')"
          >
            Stories
          </button>
        </div>
      </div>
      <div class="hero-description">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="marvel-lists">
      <div v-if="userChoice.value == 'comics'">
        <div v-show="comics.length">
          <div class="comic-title">Comics</div>
          <ul>
            <li
              class="comic-item"
              v-for="comic in comics"
              :key="comic.resourceURI"
            >
              <router-link
                :to="{ path: '/comic', query: { url: comic.resourceURI } }"
                >{{ comic.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="userChoice.value == 'series'">
        <div v-show="series.length">
          <div class="serie-title">Series</div>
          <ul>
            <li
              class="serie-item"
              v-for="serie in series"
              :key="serie.resourceURI"
            >
              {{ serie.name }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="userChoice.value == 'stories'">
        <div v-show="stories.length">
          <div class="story-title">Stories</div>
          <ul>
            <li
              class="story-item"
              v-for="story in stories"
              :key="story.resourceURI"
            >
              {{ story.name }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>Chose your content</div>
    </div>
  </div>
</template>

<script lang="ts">
import Request from "../utils/Request";
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
    const name = computed(() => heroData.data.name);
    const description = computed(() => heroData.data.description);
    const comics = computed(() => heroData.data.comics.items);
    const series = computed(() => heroData.data.series.items);
    const stories = computed(() => heroData.data.stories.items);
    const updateUserChoice = (choice: string) => {
      userChoice.value = choice;
    };

    return {
      heroData,
      name,
      description,
      imageURL,
      comics,
      series,
      stories,
      userChoice,
      updateUserChoice,
    };
  },
};
</script>

<style scoped>
* {
  color: white;
}

/* .hero-name {
  width: 100%;
} */
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .hero-image > img {
    width: 55%;
  }
  .hero-card {
    width: 100%;
  }
}
@media screen and (min-width: 600px) {
  .hero-image > img {
    width: 300px;
    height: 300px;
  }
  .marvel-lists {
    padding-left: 20px;
  }
}

.hero-image > img {
  margin: 15px;
  border-radius: 8px;
}
.hero-image {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-name,
.comic-title,
.serie-title,
.story-title {
  margin-top: 10px;
  text-align: center;
  font: 400 32px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
}
.hero-description,
.comic-item,
.serie-item,
.story-item {
  text-align: center;
  font: 400 16px/1.5 Open Sans, Trebuchet MS, Helvetica, Arial, sans-serif;
}

.comic-item:hover {
  opacity: 80%;
  background-color: #e62429;
}

.hero-description {
  max-width: 600px;
  text-align: center;
}

.buttons-mavel-list {
  width: 100%;
  display: flex;
  justify-content: center;
}

.buttons-mavel-list > button {
  margin-left: 5px;
}

button {
  background: #e62429;
  height: 40px;
  font: 400 16px/1.5 Open Sans, Trebuchet MS, Helvetica, Arial, sans-serif;
  border-radius: 4px;
}

button:hover {
  background-color: #71191e;
}

button.active {
  background-color: #390003;
}

ul {
  list-style-type: none;
  padding: 0;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>
