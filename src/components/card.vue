<template>
  <div>
    <span @click="displayHeroInfo">{{ heroData.name }}</span>
    <div v-show="isInfoDisplayed.show"> 
      <img :src="imageURL" width="200" height="200">
      <div>
        <span> {{ heroData.description }}  </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  props: {
    heroData : {},
  },
  setup(props) {

    const isInfoDisplayed = reactive({});
    isInfoDisplayed.show = false;
    const imageURL = props.heroData.thumbnail.path + '.' + props.heroData.thumbnail.extension;
    console.log (imageURL);
    function displayHeroInfo (){
      isInfoDisplayed.show = !isInfoDisplayed.show;
      console.log (props.heroData);
    }

    return {
      isInfoDisplayed,
      imageURL,
      displayHeroInfo
    };
  },
});
</script>

<style>
</style>