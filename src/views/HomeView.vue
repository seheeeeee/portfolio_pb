<template>
  <div class="wrap">
      <div class="aboutBox box on">
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
    },
    fetchData(){
      let strBox = document.querySelectorAll('.title');
      for(let i = 0; i < strBox.length; i++){
        let strTitle = strBox[i].innerText;
        let strTitleRe = strTitle.replace(/ /g, "");
        let str = strTitleRe.split(""); 
      
        var paraArr = document.createElement('div');

        for(let j = 0; j < str.length; j++){
            var para = document.createElement('span');
            let node = document.createTextNode(str[j]);
            para.appendChild(node);
            paraArr.appendChild(para);
        }
        strBox[i].appendChild(paraArr);
        strBox[i].querySelector('div').style.fontSize = '17rem';
      }
    },
    titleAni(){
      let span = document.querySelectorAll('.title div span');
      for(let i = 0; i < span.length; i++){
        span[i].style.transition = 'all .5s';
        span[i].style.opacity = '0';
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
    this.fetchData();
    this.titleAni();
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
  font-size: 0;
  font-family: 'Domine', serif;
  color: rgb(243, 58, 58);
  font-weight: 100;
  text-transform: uppercase;
  white-space: nowrap;
  transform: translateY(-50%);
}
.img > img{
  transition: all .7s ease-out;
}
.img > img:nth-child(1){
  transform: translate(100%,0) scale(40%);
}
.img > img:nth-child(2){
  transform: scale(40%);
}
.img > img:nth-child(3){
  transform: translate(-100%,0) scale(120%);
}
.img.active > img:nth-child(1){

}
.img.active > img:nth-child(2){

}
.img.active > img:nth-child(3){

}
.box.on .img > img:nth-child(1){
  transform: translate(170%, -10%) rotate(25deg) scale(70%);
}
.box.on .img > img:nth-child(2){
  transform: scale(60%) rotate(-25deg) translate(-120%, 0);
}
.box.on .img > img:nth-child(3){
  
}

.box.on .title div span{
  opacity: 1;
  color: #000;
}
</style>