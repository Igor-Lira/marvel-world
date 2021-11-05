<template>
  <div class="card">
    <h3>{{ heroData.name }}</h3>
    <div>
      <img :src="imageURL" width="200" height="200" />
      <div class="description-box">
        <span class="description"> {{ description }} </span>
      </div>
    </div>
    <span>
      <router-link :to="{ path: '/hero', query: { url: heroData.resourceURI } }"
        >See more</router-link
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { computed } from 'vue';

export default defineComponent({
  props: {
    heroData: {} as any,
  },
  setup(props) {
    const imageURL = props.heroData.thumbnail.path + "." + props.heroData.thumbnail.extension;
    const description = computed(() => {
       if (props.heroData.description.length > 180){
          return `${props.heroData.description.substring(0,180)}...`
       }
       return props.heroData.description;
    })
    return {
      imageURL,
      description,
    };
  },
});
</script>

<style scoped>

* { 
  text-align: center;
}
.card {
  width: 350px;
  height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 0 #ff8080;
}
.description-box{
  padding: 10px 10px;
}
.description {
  overflow-y: auto;
  width: 100%;
  height: 200px;
}


</style>>
