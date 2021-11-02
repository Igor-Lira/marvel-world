<template>
  <div><h1>this is the comic vue</h1></div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
    setup() {
       const route = useRoute();
       console.log (route);
    }
}
</script>

<style>

</style>