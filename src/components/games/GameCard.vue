<template>
  <section class="card" key="key">
    <header class="card-title">
      <span class="card-title-text">{{ title }}</span>
    </header>
    <img v-if="banner" :src="path">
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    title: String,
    banner: String,
  },
})
export default class GameCard extends Vue {
  path: string = `../../assets/${this.$props.banner}`;
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  max-height: 475px;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: $black;
  box-shadow: 0 5px 15px #000;
  max-width: 550px;
  backface-visibility: hidden;

  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 35px #000;
  }
}
.card-title {
  height: 20%;
  display: flex;
  letter-spacing: 0.25rem;
  text-align: center;
  justify-content: center;
  align-content: center;
  border-bottom: 2px solid #383838;
}
.card-title-text {
  font-size: 1.5rem;
  padding: 30px 0;
}
</style>
