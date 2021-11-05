<template>
  <div>
    <ul>
      <li class="alphabet" v-for="letter in alphabet" :key="letter">
        <u class="link" @click="requestAPI(letter)"> {{ letter }} </u>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["search"],
  setup(props, context) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    function requestAPI(letter) {
      console.log ('filho', letter);
      context.emit("search", letter);
    }
    return {
      alphabet,
      requestAPI,
    };
  },
};
</script>

<style scoped>
.alphabet {
  display: inline;
  list-style-type: none;
}
.link {
  padding: 0px 5px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>