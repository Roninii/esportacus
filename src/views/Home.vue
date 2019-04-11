<template>
  <div class="home"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: 93vh;
  background: center/cover url(../assets/bg.jpg);
}
</style>
