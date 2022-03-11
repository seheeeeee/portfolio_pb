<template>
<div>
  <main-load :isLoading="LoadingStatus"></main-load>
  <div class="wrap">
      <div class="aboutBox box on">
        <router-link :to="fetchedAbout.routerLink" class="sublink">
          <!-- <p class="title">{{fetchedAbout.title}}</p> -->
          <p class="title2">
            <span>p</span>
            <span>u</span>
            <span>b</span>
            <span>l</span>
            <span>i</span>
            <span>s</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
          </p>
          <div class="img">
            <img :src="require(`../img/${fetchedAbout.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedAbout.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedAbout.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
      <div class="projectBox box">
        <router-link :to="fetchedProject.routerLink" class="sublink">
          <!-- <p class="title">{{fetchedProject.title}}</p> -->
          <p class="title2">
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </p>
          <div class="img">
            <img :src="require(`../img/${fetchedProject.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedProject.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedProject.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
      <div class="contactBox box">
        <router-link :to="fetchedContact.routerLink" class="sublink">
          <!-- <p class="title">{{fetchedContact.title}}</p> -->
          <p class="title2">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </p>
          <div class="img">
            <img :src="require(`../img/${fetchedContact.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedContact.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedContact.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { pageHeight, Slider } from '../api/index';
import MainLoad from '../components/MainLoad.vue';


export default {
  components: {
    MainLoad,
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      count: '',
      LoadingStatus: false,
    }
  },
  methods: {
    resizeBoxHeight(){
      let boxes = document.querySelectorAll('.box');
      for (let i = 0; i < boxes.length; i++){
        let box = boxes[i];
        box.style.height = (window.innerHeight) + 'px';
      }
    },
    getIndex(selector){
      const elem = document.querySelector(selector);
      for(let i = 0; i < elem.parentNode.childNodes.length; i++){
        if(elem.parentNode.childNodes[i] === elem){
          this.count = i+1;
        }
      }
    },
    addCountBox(){
      let countBox = document.createElement('div');
      let count = document.createTextNode(`${this.count}  of 3`);
      countBox.className = 'countBox';
      countBox.appendChild(count);
      let wrap = document.querySelector('.wrap');
      wrap.appendChild(countBox);
      countBox.style.cssText = `position: absolute;
                                left: 50%;
                                top: 24%;
                                transform: translateX(510px) rotate(90deg);
                                font-size: 1.2rem;
                                font-family: "Domine",serif`
    },
    startLoading(){
      this.LoadingStatus = true;
    },
    endLoading(){
      setTimeout(()=>{
        this.LoadingStatus = false;
      },8000)
    }
  },
  computed: {
    ...mapGetters(['fetchedAbout','fetchedProject','fetchedContact']),
  },
  created(){
    this.$store.dispatch('FETCH_ABOUT');
    this.$store.dispatch('FETCH_PROJECT');
    this.$store.dispatch('FETCH_CONTACT');
    this.startLoading();
  },
  mounted(){
    this.endLoading();
    let homeWrap = document.querySelector('.wrap');
    pageHeight(homeWrap);
    this.resizeBoxHeight();
    window.addEventListener('resize', this.resizeBoxHeight);
    Slider(homeWrap);
    // this.getIndex('.on');
    // homeWrap.addEventListener('scroll', this.getIndex);
    // this.addCountBox();
  },
  beforeDestroy(){
    // this.LoadingStatus = false;
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -100%;
  right: 0;
  transition: all .7s;

  &.aboutBox {
    bottom: 0;
  }
}

.sublink {
  display: block;
}

.title {
  width: 100%;
  @include position(0, 50%, 100%);
  z-index: 10;
  font: {
    size: 0;
    family: $title-font;
    weight: 100;
  }
  text: {
    align: center;
    transform: uppercase;
  }
  color: $red;
  white-space: nowrap;
  transform: translateY(-50%);
}

.img {
  min-width: 700px;
  white-space: nowrap;

  > img {
    transition: all .7s ease-out;
    width: 400px;
    height: 600px;
    -webkit-filter: $grayscale;
    filter: $grayscale;

    &:nth-child(1) {
      transform: translate(100%, 0) scale(40%);
    }

    &:nth-child(2) {
      transform: scale(40%);
    }

    &:nth-child(3) {
      transform: translate(-100%, 0) scale(120%);
    }
  }
}

.box {
  &.on {
    .img > img {
      &:nth-child(1) {
        transform: translate(170%, -10%) rotate(25deg) scale(70%);
      }

      &:nth-child(2) {
        transform: scale(60%) rotate(-25deg) translate(-120%, 0);
      }
    }

    &:hover .img > img {
      &:nth-child(1) {
        transform: translate(165%, -10%) rotate(23deg) scale(70%);
      }

      &:nth-child(2) {
        transform: scale(60%) rotate(-22deg) translate(-115%, 0);
      }
    }
  }

  .title2 {
    width: 100%;
    @include position(0, 50%, 100%);
    z-index: 10;
    font: {
      family: $title-font;
      weight: 100;
    }
    text: {
      align: center;
      transform: uppercase;
    }
    color: $red;
    white-space: nowrap;
    transform: translateY(-50%);
    overflow: hidden;

    span {
      font-size: 17rem;
      text-transform: uppercase;
      color: $red;
      opacity: 0;
      position: relative;
      top: 250px;
      transition: all .7s .7s;

      &:nth-child(1) {
        transition-delay: .7s;
      }

      &:nth-child(2) {
        transition-delay: .75s;
      }

      &:nth-child(3) {
        transition-delay: .8s;
      }

      &:nth-child(4) {
        transition-delay: .85s;
      }

      &:nth-child(5) {
        transition-delay: .9s;
      }

      &:nth-child(6) {
        transition-delay: .95s;
      }

      &:nth-child(7) {
        transition-delay: 1.0s;
      }

      &:nth-child(8) {
        transition-delay: 1.05s;
      }

      &:nth-child(9) {
        transition-delay: 1.1s;
      }
    }
  }

  &.on .title2 span {
    opacity: 1;
    top: 0;
  }
}

.countBox {
  position: absolute;
  top: 80px;
  right: 50%;
  height: 50px;
}
</style>