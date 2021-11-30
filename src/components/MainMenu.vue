<template>
  <div class="mainMenu" :class="{ active : isShow }">
      <span @click="toggleMenu">MENU</span> 
      <div class="menuBtn">
        <ul>
          <li @click="unActive"><span>&#8560;</span><router-link to="/about">ABOUT</router-link></li>
          <li @click="unActive"><span>&#8561;</span><router-link to="/project">PROJECT</router-link></li>
          <li @click="unActive"><span>&#8562;</span><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <div class="removeBtn" @click="unActive">X</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    toggleMenu(){
      this.isShow = true;
    },
    unActive(){
      this.isShow = false;
    },
    cloneList(){
     let menuList = document.querySelector('.menuBtn ul');
     let menuItem = document.querySelectorAll('.menuBtn ul li');
      for(let i = 0; i < menuItem.length; i++){
        let copyObj = menuItem[i].cloneNode(true);
        menuList.appendChild(copyObj);
      }
    },
    wheelAnimation(){
      let before = 0;
      let menuBtn = document.querySelector('.menuBtn');
      menuBtn.addEventListener('scroll',()=>{
          if(before < window.scrollY) {
            console.log("scroll down");
          }
          else {
            console.log("scroll up");
          }
          before = window.scrollY;
      });
    },
  },
  mounted() {
    this.cloneList();
    this.wheelAnimation();
  }
}
</script>

<style scoped>
.mainMenu{
  position: absolute;
  right: 50px; top: 50px;
  z-index: 999;
}
.mainMenu.active .menuBtn{
  height: 100vh;
  position: fixed;
  opacity: 1;
  z-index: 999;
}
.mainMenu .menuBtn{
  background-color: #000;
  width: 100vw;
  height: 0;
  position: absolute;
  /* right: -50px;
  top: -200vh; */
  right: -50px;
  top: -50px;
  padding: 100px 100px;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  transition: all .4s;
}
.menuBtn ul{
  position: relative;
  left: 55%;
  overflow-y: scroll;
  height: 100%;
  scroll-snap-type: y mandatory;
}
.mainMenu ul li {
  margin-bottom: 15px;
  position: relative;
  scroll-snap-align: start;
}
.mainMenu ul li span{
  font-size: 9px;
  color: #fff;
  display: block;
  position: absolute;
  left: -70px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  border: 0.5px solid transparent;
  transition: all .5s;
}

.mainMenu ul li:hover span{
  border-color: rgba(255,255,255, 0.6);
}
.mainMenu ul li a{
  color: #fff;
  font-size: 7rem;
  font-family: 'Domine', serif;
  font-weight: 100;
}
.removeBtn{
  color: #fff;
  position: relative; left: 50px;
  z-index: 99;
}
</style>