<template>
    <nav  :class="isActive ? 'menu-links-list' : ''">
        <button type="button" class="button" @click="toggleActive" v-if="!isActive">
            <font-awesome-icon icon="bars" size="2x" />
        </button>
        <template v-if="isActive">
            <div v-for="path in paths" :key="path.id">
                <button type="button" class="button button-link" @click="toggleActive">
                    <router-link :to="path.path">{{ path.id.toUpperCase() }}</router-link>
                </button>
            </div>
        </template>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
  props: {
    paths: Array,
  },
})
export default class MobileNavList extends Vue {
  isActive: boolean = false;

  toggleActive() : void {
    this.isActive = !this.isActive;
  }
}
</script>

<style lang="scss" scoped>
.button {
    border: none;
    background: none;
    &.button-link {
        padding: .25rem 0;
    }
}
svg {
    color: $white;
    @media screen and (min-width: 800px) {
        display: none;
    }
}
.menu-links-list {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    text-align: right;
    background: $black;
    opacity: .95;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
 a {
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 600;
        color: $white;
        margin: 1rem;

      &.router-link-exact-active, &:hover {
          color: $teal;
          }
    }
</style>
