<template>
  <main>
    <div class="games-grid">
      <header class="title">
        <h1>Games</h1>
      </header>
      <GameCard v-for="game in games" :title="game.name" :banner="game.banner" :key="game.id"/>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Games, Game } from '@/games';
import GameCard from '../components/games/GameCard.vue';

@Component({
  components: {
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
  background: linear-gradient(to bottom left, $purple, $bg);
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
.title {
  margin: 20px 0;
  grid-column: 1 / -1;
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  border-bottom: 1px solid $teal;
}
</style>
