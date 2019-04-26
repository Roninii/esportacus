<template>
  <div class="page-nav-container">
    <button type="button" class="page-nav" @click="$emit('first')">
      First
    </button>
    <button
      v-for="page in pages"
      :key="page"
      class="page-nav"
      :class="current === page ? 'active' : ''"
      @click="$emit('go-to', page)"
    >
      {{ page }}
    </button>
    <button type="button" class="page-nav" @click="$emit('last')">
      Last
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    current: Number,
    pages: Number,
    perPage: Number,
  },
})
export default class Pagination extends Vue {}
</script>

<style lang="scss" scoped>
.page-nav-container {
  display: flex;
  justify-content: center;
}
.page-nav {
  margin: 0 1rem;
  background: none;
  border: none;
  color: $white;
  font-size: 1.2rem;

  transition: all 0.2s;

  &:hover {
    color: $teal;
    cursor: pointer;
    text-decoration: underline;
  }

  &.active {
    color: $teal;
    text-decoration: underline;
  }
}
</style>
