<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Nav from "./components/nav/Nav.vue";

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  color: $white;
  text-shadow: 0 2px 2px #000;
  background: no-repeat linear-gradient(to bottom left, $purple, $bg);
}
</style>
