<template>
  <main>
    <div class="games-grid">
      <Header title="Games"/>
      <GameCard
        v-for="game in games"
        :logo="game.title"
        :name="game.name"
        :banner="game.banner"
        :key="game.id"
      />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Games, Game } from "@/games";
import GameCard from "../components/games/GameCard.vue";
import Header from "../layouts/Header.vue";

@Component({
  components: {
    Header,
    GameCard,
  },
})
export default class name extends Vue {
  games: Array<Game>;

  constructor() {
    super();
    this.games = Games;
  }
}
</script>

<style lang="scss" scoped>
main {
  overflow: hidden;
}
.games-grid {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr minmax(400px, 3fr);
  grid-auto-rows: minmax(400px, 3fr);
  justify-items: center;
  margin: 0 10px;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}
</style>
