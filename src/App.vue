<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Nav from './components/nav/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {

}
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
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-smoothing: antialiased;
}

</style>
