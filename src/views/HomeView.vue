<template>
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
    initTitle(){
      let span = document.querySelectorAll('.title div span');
      for(let i = 0; i < span.length; i++){
        span[i].style.transition = 'all .5s';
        span[i].style.opacity = '0';
      }
    },
    onTitle(){
      let boxes = document.querySelectorAll('.box');

      for(let c = 0; c < boxes.length; c++){
        if(boxes[c].classList.contains('on')){
          let activeBox = boxes[c];
          let activeSpan = activeBox.querySelectorAll('.title2 span');
          console.log(activeSpan);
          for(let j = 0; j < activeSpan.length; j++){
            activeSpan[j].style.opacity = '1';
          }
          activeBox = [];
          activeSpan = [];
          console.log(activeBox, activeSpan);
          break;
        }
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
    // this.doMouseOver();
    // this.fetchData();
    // this.initTitle();
    // window.addEventListener('wheel', this.onTitle());
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
  width: 400px;
  height: 600px;
  -webkit-filter: grayscale(70%);
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
.box.on:hover .img > img:nth-child(1){
  transform: translate(165%, -10%) rotate(23deg) scale(70%);
}
.box.on:hover .img > img:nth-child(2){
  transform: scale(60%) rotate(-22deg) translate(-115%, 0);
}

.box .title2{
  width: 100%;
  /* height: 1px; */
  text-align: center;
  position: absolute; left: 0; top: 50%;
  z-index: 10;
  font-family: 'Domine', serif;
  color: rgb(243, 58, 58);
  font-weight: 100;
  text-transform: uppercase;
  white-space: nowrap;
  transform: translateY(-50%);
  overflow: hidden;
}
.box .title2 span{
  font-size: 17rem;
  text-transform: uppercase;
  color: rgb(243, 58, 58);
  opacity: 0;
  position: relative;
  top: 250px;
  transition: all .7s .7s;
}
.box .title2 span:nth-child(1){
  transition-delay: .7s;
}
.box .title2 span:nth-child(2){
  transition-delay: .75s;
}
.box .title2 span:nth-child(3){
  transition-delay: .8s;
}
.box .title2 span:nth-child(4){
  transition-delay: .85s;
}
.box .title2 span:nth-child(5){
  transition-delay: .9s;
}
.box .title2 span:nth-child(6){
  transition-delay: .95s;
}
.box .title2 span:nth-child(7){
  transition-delay: 1.0s;
}
.box .title2 span:nth-child(8){
  transition-delay: 1.05s;
}
.box .title2 span:nth-child(9){
  transition-delay: 1.1s;
}
.box.on .title2 span{
  opacity: 1;
  top: 0;
}
</style>