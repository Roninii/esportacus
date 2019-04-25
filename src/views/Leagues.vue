<template>
  <main>
    <div class="container">
      <Header title="Leagues" />
      <div v-for="league in leagues" :key="league.id" class="row">
        <span class="league-name">{{ league.name }}</span>
        {{ league.videogame.name }}
      </div>
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
header {
  width: 40rem;
  justify-self: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
}
.container {
  display: grid;
  grid-gap: 1rem 0;
  grid-template-rows: 2fr;
  grid-auto-rows: minmax(1rem, 2.5rem);
}
.row {
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;

  &:nth-child(even) {
    background-color: rgba($purple, 0.3);
  }
}
.league-name {
  width: 75%;
}
</style>
