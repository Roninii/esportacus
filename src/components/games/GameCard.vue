<template>
  <button
    class="card"
    key="key"
    :style="{background: `no-repeat center/cover url(${banner}), #000`}"
  >
    <img v-if="logo" :src="logo" alt="name">
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    logo: String,
    banner: String,
    name: String,
  },
})
export default class GameCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 100%;
  max-height: 475px;
  width: 100%;
  max-width: 550px;
  border-radius: 15%;
  border: none;
  overflow: hidden;
  box-shadow: 0 0 15px #000;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 35px #000;
    z-index: 100;
    &:before {
      opacity: 0.2;
    }
    img {
      opacity: 1;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: $black;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    transition: all 1s;
    backface-visibility: hidden;

    @media screen and (max-width: 1400px) {
      opacity: 0.2;
    }
  }
  & img {
    width: 50%;
    opacity: 0;
    backface-visibility: hidden;

    transition: opacity 0.75s;
    @media screen and (max-width: 1400px) {
      opacity: 1;
    }
  }
}
// .card-title {
//   display: flex;
//   letter-spacing: 0.25rem;
//   text-align: center;
//   justify-content: center;
//   align-content: center;
//   z-index: 10;
// }
// .card-title-text {
//   color: #fff;
//   font-size: 2rem;
//   font-weight: 900;
//   padding: 30px 0;
//   text-shadow: 0 2px 0 #000;
//   opacity: 0;
//   backface-visibility: hidden;

//   transition: all 0.75s;
// }
</style>
