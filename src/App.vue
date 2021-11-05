<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>

import { defineComponent } from "@vue/runtime-core";
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  },
  setup() {
    
  },
})
</script>
