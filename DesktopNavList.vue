<template>
  <nav class="menu-links-list">
    <div v-for="path in paths" :key="path.id">
      <router-link class="button button__link" :to="path.path">{{
        path.id.toUpperCase()
      }}</router-link>
    </div>
    <div>
      <button type="button" class="button button-link" @click.prevent="toggleActive">
        <a href="">LOGIN</a>
      </button>
    </div>
    <div>
      <button type="button" class="button button-link" @click.prevent="toggleActive">
        <a href="">REGISTER</a>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

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
  &.button__link {
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
