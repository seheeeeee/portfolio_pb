<template>
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
      <div class="waveContent">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waveBlock {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;

  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.waveContent {
  position: relative;
  height: 5vh;
  text-align: center;
  background-color: $white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

  &:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  &:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  &:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  &:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@include mobile{
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .waveContent {
    height: 20vh;
  }
}
</style>