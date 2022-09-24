<template>
  <div class="card-container-wrapper">
    <div class="card-container" :style="backgroundCss">
      <div class="card-title">{{ heroData.name }}</div>
      <div class="card-content"> {{ description}} </div>
      <span class="card-button">
        <router-link :to="{ path: '/hero', query: { url: heroData.resourceURI } }">See more</router-link>
      </span>
    </div>
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
      if (props.heroData.description.length > 180) {
        return `${props.heroData.description.substring(0, 180)}...`
      }
      return props.heroData.description;
    })

    const backgroundCss = {
      background: `200px linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(57,0,3,1)), url(${imageURL})`
    }

    return {
      backgroundCss,
      description,
    };
  },
});
</script>

<style scoped>
.card-container {
  margin-top: 10px;
  width: 300px;
  height: 400px;
  overflow-y: auto;
  background: #FAFAFA;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  filter: drop-shadow(0px 4px 84px rgba(0, 0, 0, 0.15));
}

.card-container-wrapper:hover > .card-container {
  opacity: 70%;
}

.card-title {
  padding-top: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  color: #390003;
}

.card-content {
  position: fixed;
  left: 0;
  top: 280px;
  margin: 4px;
  color: white;
}

.card-button {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
}
</style>>
