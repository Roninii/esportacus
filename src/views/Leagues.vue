<template>
  <main>
    <Header title="Leagues"/>
    <div v-for="league in leagues" :key="league.id">
      <template v-if="league.image_url">
        <img :src="league.image_url">
      </template>
      <template v-else>{{ league.name }}</template>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Header from "../layouts/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Leagues extends Vue {
  leaguesURL = ``;

  leagues: Array<any>;

  constructor() {
    super();
    this.leagues = [];
  }

  mounted() {
    fetch(this.leaguesURL)
      .then(res => res.json())
      .then(data => {
        this.leagues = data;
      });
  }
}
</script>

<style lang="scss" scoped>
main {
  height: 93vh;
}
</style>
