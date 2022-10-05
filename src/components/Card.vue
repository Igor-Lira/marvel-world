<template>
  <div class="card-container-wrapper">
    <div class="card-container" @click="goToHeroPage">
      <img :src="imageURL" alt="" />
      <div class="card-title">{{ heroData.name }}</div>
      <!-- <div class="card-content">{{ description }}</div> -->
      <!-- <span class="card-button">
        <router-link
          :to="{ path: '/hero', }"
          >See more</router-link
        >
      </span> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    heroData: {} as any,
  },
  setup(props) {
    const router = useRouter();
    const imageURL =
      props.heroData.thumbnail.path + "." + props.heroData.thumbnail.extension;

    function goToHeroPage() {
      router.push({
        path: "/hero",
        query: { url: props.heroData.resourceURI },
      });
    }

    return {
      imageURL,
      goToHeroPage,
    };
  },
});
</script>

<style scoped>
.card-container {
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  width: 150px;
  height: 400px;
  background: #151515;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
}

.card-container > img {
  height: 50%;
  width: 100%;
}

.card-container::after {
  height: 4px;
  content: "";
  background-color: #e62429;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 50%;
}

.card-container-wrapper:hover > .card-container {
  opacity: 90%;
  background-color: #390003;
  transition: opacity 300ms;
}

.card-title {
  margin-top: 10%;
  font: 400 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
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
</style>
