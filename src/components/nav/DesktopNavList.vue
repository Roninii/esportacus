<template>
  <nav class="menu-links-list">
    <div v-for="path in paths" :key="path.id">
      <button type="button" class="button button-link">
        <router-link :to="path.path">{{ path.id.toUpperCase() }}</router-link>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  props: {
    paths: Array,
  },
})
export default class DesktopNavList extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background: none;
  &.button-link {
    padding: 0.25rem 0;
  }
}
svg {
  color: $white;
  @media screen and (min-width: 800px) {
    display: none;
  }
}
.menu-links-list {
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 800px) {
    display: none;
  }
}
a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: $white;
  margin: 1rem;

  &.router-link-exact-active,
  &:hover {
    color: $teal;
  }
}
</style>
