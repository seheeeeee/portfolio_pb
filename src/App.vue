<template>
  <div id="app">
    <custom-cursor></custom-cursor>
    <main-logo></main-logo>
    <main-menu></main-menu>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <!-- <wave-block></wave-block> -->
  </div>
</template>

<script>
import MainLogo from './components/MainLogo.vue';
import MainMenu from './components/MainMenu.vue';
// import WaveBlock from './components/waveBlock.vue';
import CustomCursor from './components/CustomCursor.vue';

export default {
  components: {
    MainLogo,
    MainMenu,
    // WaveBlock,
    CustomCursor,
    // MainLoad,
  },
}
</script>

<style lang="scss">
@import './default/default.css'; 
/* 메인타이틀 폰트 */
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap');
/* 부제목폰트 */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap');
/* 중간 넘버링 폰트 */
@import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
/* 본문 폰트 */
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


#app {
  padding: 0;
  margin: 0;
  height: auto;
  position: relative;
  z-index: 0;
  background-color: $bg-color;
  color: $black;
  cursor: none;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h1.title {
  @include title;
}
h3.title {
  @include title{
    font-size: 15rem;
    word-break: keep-all;
    margin-bottom: 0;
  };
}
.clearFix{
  @include clear;
}
</style>
