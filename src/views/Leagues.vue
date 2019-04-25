<template>
  <main>
    <Header title="Leagues" />
    <div v-for="league in leagues" :key="league.id">
      {{ league.name }} | {{ league.videogame.name }}
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
  leaguesURL = `https://api.pandascore.co/leagues?token=Svkm0PUE2PwoSGBOjwKz3dxEb1TLfnWexGZRFCO1F2pmkdSHmNU`;

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
