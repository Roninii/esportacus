<template>
  <header class="title">
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    title: String,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  margin: 20px 0;
  border-bottom: 1px solid $teal;
  grid-column: 1 / -1;
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.5rem;
}
@media screen and (max-width: 500px) {
  .title {
    font-size: 1.5rem;
  }
}
</style>
