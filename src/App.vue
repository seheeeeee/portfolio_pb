<template>
  <div id="app">
    <main-logo></main-logo>
    <main-menu></main-menu>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <div class="waveBlock">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
      <div class="waveContent"></div>
    </div>
  </div>
</template>

<script>
import MainLogo from './components/MainLogo.vue';
import MainMenu from './components/MainMenu.vue';

export default {
  components: {
    MainLogo,
    MainMenu,
  
  }

}
</script>

<style>
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
  background-color: #f6eee3;
  position: relative;
  color: #1f1f1f;
  z-index: 0;
}
.underBar::after{
  content: '';
  width: 30%;
  height: 2px;
  background-color: lightcoral;
  position: absolute;
  left: 50%; bottom: -18px;
  transform: translateX(-50%);
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h1.title {
  font-family: 'Domine', serif;
  text-align: center;
  width: 1000px;
  margin: 0 auto 250px;
  font-size: 9rem;
  font-weight: 300;
  letter-spacing: -8px;
  color: #000;
  position: relative;
}
.clearFix::before{
  content: '';
  display: block;
  clear: both;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waveBlock{
  position: sticky;
  right: 0; bottom: 0;
  width: 100vw;
  z-index: 1;
}
.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}
.waveContent {
  position:relative;
  height:5vh;
  text-align:center;
  background-color: white;
}
/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .waveContent {
    height:20vh;
  }
}
</style>
