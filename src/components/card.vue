<template>
  <div class = 'card' @click="displayHeroInfo">
    <span>{{ heroData.name }}</span>
    <div>
      <img :src="imageURL" width="200" height="200">
      <div>
        <span class='text-card'> {{ heroData.description }}  </span>
      </div>
    </div>
    <span> <router-link :to="{path:'/hero', query: {url: heroData.resourceURI}}">See more</router-link> </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    heroData : {} as any,
  },
  setup(props) {
    const imageURL = props.heroData.thumbnail.path + '.' + props.heroData.thumbnail.extension;
    function displayHeroInfo (){
      console.log (props.heroData);
    }

    return {
      imageURL,
      displayHeroInfo
    };
  },
});
</script>

<style scoped>
.card {
  width:300px; height:400px;
  box-shadow: 0 4px 8px 0 #1abc9c;
  padding: 16px;
  text-align: center;
}
.text-card {
    width:300px; height:200px;
}

</style>>
