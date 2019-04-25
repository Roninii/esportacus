<template>
  <main>
    <div class="container" :class="leagues.length ? '' : 'loading'">
      <template v-if="leagues.length">
        <Header title="Leagues" />
        <div v-for="league in leagues" :key="league.id" class="row">
          <router-link class="league-name" to="">{{ league.name }}</router-link>
          {{ league.videogame.name }}
        </div>
      </template>
      <template v-else>
        Loading...
      </template>
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
  leaguesURL = `https://api.pandascore.co/leagues?per_page=20&token=Svkm0PUE2PwoSGBOjwKz3dxEb1TLfnWexGZRFCO1F2pmkdSHmNU`;

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
    width: 75%;
  }
}
.container {
  display: grid;
  grid-gap: 1rem 0;
  grid-template-rows: 2fr;
  grid-auto-rows: minmax(1rem, 2.5rem);
  padding-bottom: 10px;

  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
    max-width: 50rem;
    margin: 0 auto;
    jusity-content: center;
  }
}
.row {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
  font-weight: 500;

  &:nth-child(even) {
    background-color: rgba($purple, 0.3);
  }

  &:hover {
    color: $teal;
  }
}
.league-name {
  width: 75%;
  text-decoration: none;
  color: inherit;
}
.loading {
  height: 90vh;
}
</style>
