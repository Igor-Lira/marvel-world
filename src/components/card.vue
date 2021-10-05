<template>
<div>
  <h1>This is a stock game to you</h1>
  <span> {{ marketData.value }} </span>
</div>
</template>

<script>
import { defineComponent, reactive } from "@vue/runtime-core";
import axios from 'axios'


export default defineComponent({
  setup() {
    let marketData = reactive ({})
    const urlMarvel = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e49bea4a6ee3e35352198237a08be003&hash=d375cf48c02740a120d568907be5203b`
    //const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
    axios({
          method: "get",
          json: true,
          headers: {'User-Agent': 'request'},
          url: urlMarvel,
      }).then ((results) => marketData.value = results)
  return {
    marketData
  }
  },
});
</script>

<style>
</style>