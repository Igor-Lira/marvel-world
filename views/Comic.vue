<template>
  <div v-if="comicData.data" class="wrapper">
    <div class="comic-title">{{ title }}</div>
    <img class="comic-image" :src="imageURL" width="300" height="400" />
    <div class="comic-description">{{ description }}</div>
    <div v-if="comicData.data.prices" class="comic-price">
      <p>{{ printprice }}</p>
      <p>{{ digitalPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Request from "../utils/Request";
import { useRoute } from "vue-router";
import { reactive, computed } from "vue";

export default {
  setup() {
    const comicData = reactive({}) as any;
    const coverStory = reactive({}) as any;
    const innerStory = reactive({}) as any;
    const route = useRoute();
    const request = new Request(route.query.url?.toString());

    request.searchInApi((apiData: any) => {
      comicData.data = apiData[0];
      getStory(comicData.data.stories.items);
    });

    const title = computed(() => comicData.data.title);
    const description = computed(() => {
      return comicData.data.description
        ? comicData.data.description
        : "Story not available";
    });
    const imageURL = computed(
      () =>
        comicData.data.thumbnail.path + "." + comicData.data.thumbnail.extension
    );
    const getStory = (stories: any) => {
      const requestCoverStory = new Request(stories[0].resourceURI);
      requestCoverStory.searchInApi((apiData: any) => {
        coverStory.value = apiData.description;
      });
      const requestInnerStory = new Request(stories[1].resourceURI);
      requestInnerStory.searchInApi((apiData: any) => {
        innerStory.value = apiData.description;
      });
    };
    const printprice = computed(() => {
      let price = "";
      for (let i = 0; i < comicData.data.prices.length; i++) {
        if (comicData.data.prices[i].type == "printPrice") {
          price = `Print Price: ${comicData.data.prices[i].price} $`;
        }
      }
      price =
        price === "Print Price: 0 $" ? "Print Price: Not Available" : price;
      return price;
    });
    const digitalPrice = computed(() => {
      let price = "";
      for (let i = 0; i < comicData.data.prices.length; i++) {
        if (comicData.data.prices[i].type == "digitalPurchasePrice") {
          price = `Digital Price: ${comicData.data.prices[i].price} $`;
        }
      }
      price =
        price === "Digital Price: 0 $" ? "Digital Price: Not Available" : price;
      return price;
    });

    return {
      comicData,
      title,
      description,
      imageURL,
      coverStory,
      innerStory,
      printprice,
      digitalPrice,
    };
  },
};
</script>

<style scoped>
* {
  color: white;
}
.comic-title {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font: 400 32px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
}
.comic-description,
.comic-price {
  text-align: center;
  font: 400 16px/1.5 Open Sans, Trebuchet MS, Helvetica, Arial, sans-serif;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.comic-image {
  display: inline-block;
  padding: 10px;
}
.comic-description {
  margin-top: 20px;
  width: 100%;
}
.comic-price {
  margin-top: 20px;
  width: 100%;
}
</style>
>
