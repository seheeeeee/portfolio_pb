<template>
  <div class="wrap">
      <div class="aboutBox box">
        <router-link :to="fetchedAbout.routerLink" class="sublink">
          <p class="title">{{fetchedAbout.title}}</p>
          <div class="img">
            <img :src="require(`../img/${fetchedAbout.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedAbout.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedAbout.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
      <div class="projectBox box">
        <router-link :to="fetchedProject.routerLink" class="sublink">
          <p class="title">{{fetchedProject.title}}</p>
          <div class="img">
            <img :src="require(`../img/${fetchedProject.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedProject.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedProject.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
      <div class="contactBox box">
        <router-link :to="fetchedContact.routerLink" class="sublink">
          <p class="title">{{fetchedContact.title}}</p>
          <div class="img">
            <img :src="require(`../img/${fetchedContact.imgURL[0]}`)" alt="">
            <img :src="require(`../img/${fetchedContact.imgURL[1]}`)" alt="">
            <img :src="require(`../img/${fetchedContact.imgURL[2]}`)" alt="">
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { pageHeight, Slider } from '../api/index'


export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    }
  },
  methods: {
    resizeBoxHeight(){
      var boxes = document.querySelectorAll('.box');
      for (var i = 0; i < boxes.length; i++){
        var box = boxes[i];
        box.style.height = (window.innerHeight) + 'px';
      }
    },
    doMouseOver(){
      const img = document.querySelectorAll('.img');
      for(let i = 0; i < img.length; i++){
        img[i].addEventListener('mouseover', ()=> {
          img[i].className += ' active';
        });
        img[i].addEventListener('mouseleave', ()=> {
          img[i].classList.remove('active');
        });
      }
    }
  },
  computed: {
    ...mapGetters(['fetchedAbout','fetchedProject','fetchedContact']),
  },
  created(){
    this.$store.dispatch('FETCH_ABOUT');
    this.$store.dispatch('FETCH_PROJECT');
    this.$store.dispatch('FETCH_CONTACT');
  },
  mounted(){
    var wrap = document.querySelector('.wrap');
    pageHeight(wrap);
    this.resizeBoxHeight();
    window.addEventListener('resize', this.resizeBoxHeight());
    Slider(wrap);
    this.doMouseOver();
  },
  updated(){
    this.resizeBoxHeight();
  },
}
</script>

<style scoped>
.wrap{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.box{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  position: absolute;
  bottom: -100%;
  right: 0;
  transition: all .7s;
}
.box.aboutBox{
  bottom: 0;
}
.sublink{
  display: block;
}
.title{
  width: 100%;
  text-align: center;
  position: absolute; left: 0; top: 50%;
  z-index: 10;
}
.img > img{
  transition: all .5s;
}
.img > img:nth-child(1){
  transform: translate(100%, 0) scale(60%);
}
.img > img:nth-child(2){
  transform: scale(80%);
}
.img > img:nth-child(3){
  transform: translate(-100%, 0) scale(80%);
}
.img.active > img:nth-child(1){
  transform: translate(40%) rotate(-25deg) scale(60%);
}
.img.active > img:nth-child(2){
  transform: scale(100%);
}
.img.active > img:nth-child(3){
  transform: translate(-10%, 30%) rotate(25deg) scale(80%);
}
</style>