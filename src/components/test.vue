<template>
  <div class = 'card' @click="displayHeroInfo">
    <span>{{ heroData.name }}</span>
    <div v-show="isInfoDisplayed.show"> 
      <img :src="imageURL" width="200" height="200">
      <div>
        <span> {{ heroData.description }}  </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  props: {
    heroData : {} as any,
  },
  setup(props) {
    console.log ('setup chamado')
    const isInfoDisplayed = reactive({}) as any;
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

<style scoped>
.card {
  width: 400px;
  box-shadow: 0 4px 8px 0 red;
  padding: 16px;
  text-align: center;
}

</style>>
