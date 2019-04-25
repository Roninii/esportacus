<template>
  <header class="nav">
    <span class="title">ESportacus</span>
    <MobileNavList :paths="paths"/>
    <DesktopNavList :paths="paths"/>
  </header>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import MobileNavList from "./MobileNavList.vue";
import DesktopNavList from "./DesktopNavList.vue";

@Component({
  components: {
    MobileNavList,
    DesktopNavList,
  },
})
export default class Nav extends Vue {
  paths: Array<object> = [
    { id: `home`, path: `/` },
    { id: `games`, path: `/games` },
    { id: `leagues`, path: `/leagues` },
    { id: `login`, path: `/login` },
    { id: `register`, path: `/register` },
  ];
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: $black;
  box-shadow: 0 5px 10px #111;
  height: 7vh;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 800px) {
    height: 10vh;
  }
  @media screen and (min-width: 1400px) {
    height: 7vh;
  }
}
.title {
  color: $white;
  font-size: 2.2rem;
  font-weight: 800;
  margin-right: auto;
  font-family: roboto;
}
</style>
