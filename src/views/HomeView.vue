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
import { pageHeight } from '../api/index'


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
     calculateSectionOffsets() {
      let sections = document.querySelectorAll('.box');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
        
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      
      document.querySelectorAll('.box')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
    
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    },
    resizeBoxHeight(){
      var boxes = document.querySelectorAll('.box');
      for (var i = 0; i < boxes.length; i++){
        var box = boxes[i];
        box.style.height = (window.innerHeight - 100) + 'px';
      }
    },
    doMouseOver(){
       document.querySelectorAll('.img').className += 'active';
    }
  },
  computed: {
    ...mapGetters(['fetchedAbout','fetchedProject','fetchedContact']),
  },
  created(){
    this.$store.dispatch('FETCH_ABOUT');
    this.$store.dispatch('FETCH_PROJECT');
    this.$store.dispatch('FETCH_CONTACT');

    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browserS
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  mounted(){
    var wrap = document.querySelector('.wrap');
    pageHeight(wrap);
    this.resizeBoxHeight();
    window.addEventListener('resize', this.resizeBoxHeight());
  },
  updated(){
    this.resizeBoxHeight();
    
  },
  destroyed(){
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile device
  },
  // beforeDestroy(){
  //   window.removeEventListener('resize', this.resizeBoxHeight());
  // }
}
</script>

<style scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.sublink{
  display: block;
}
.title{
  width: 100%;
  text-align: center;
  position: absolute; left: 0; top: 50%;
}
.img > img:nth-child(1){
  transform: translate(100%, 0) scale(60%);
}
.img > img:nth-child(3){
  transform: translate(-100%, 0) scale(80%);
}
.img.active > img:nth-child(1){
  transform: translate(40%, ) rotate(-25deg) scale(60%);
}
.img.active > img:nth-child(3){
  transform: rotate(45deg) scale(80%);
}
</style>