<template>
  <div class="mainMenu" :class="{ active : isShow }">
      <span @click="toggleMenu">MENU</span> 
      <div class="menuBtn menu">
        <ul class="menu--wrapper">
          <li class="menu--item" @click="unActive"><span>&#8560;</span><router-link to="/about">ABOUT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8561;</span><router-link to="/project">PROJECT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8562;</span><router-link to="/contact">CONTACT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8560;</span><router-link to="/about">ABOUT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8561;</span><router-link to="/project">PROJECT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8562;</span><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <div class="removeBtn" @click="unActive">EXIT</div>
      </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
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
    // cloneList(){
    //  let menuList = document.querySelector('.menuBtn ul');
    //  let menuItem = document.querySelectorAll('.menuBtn ul li');
    //   for(let i = 0; i < menuItem.length; i++){
    //     let copyObj = menuItem[i].cloneNode(true);
    //     menuList.appendChild(copyObj);
    //   }
    // },
    scrollAni(){
      const $menu = document.querySelector('.menuBtn.menu');
      const $items = document.querySelectorAll('.menu--item');
      // let menuHeight = $menu.clientHeight;
      let itemHeight = $items[0].clientHeight;
      let wrapHeight = $items.length * itemHeight;

      let scrollSpeed = 0;
      let oldScrollY = 0;
      let scrollY = 0;
      let y = 0;

      // lerp
      const lerp = (v0, v1, t) => {
        return v0 * ( 1 - t ) + v1 * t;
      }

      // dispose
      const dispose = (scroll) => {
        gsap.set($items, {
          y: (i) => {
            return i * itemHeight + scroll;
          },
          modifiers: {
            y: (y) => {
              const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y));
              return `${s}px`;
            },
          }
        })
      } 
      dispose(0);

      // Wheel
      const handleMouseWheel = (e) => {
        scrollY -= e.deltaY;
      }


      // Touch
      let touchStart = 0;
      let touchY = 0;
      let isDragging = false;
      const handleTouchStart = (e) => {
        touchStart = e.clientY || e.touches[0].clientY;
        isDragging = true;
        $menu.classList.add('is-dragging');
      };
      const handleTouchMove = (e) => {
        if (!isDragging) return
        touchY = e.clientY || e.touches[0].clientY;
        scrollY += (touchY - touchStart) * 2.5;
        touchStart = touchY;
      }
      const handleTouchEnd = () => {
        isDragging = false;
        $menu.classList.remove('is-dragging');
      }


      // Listeners
      $menu.addEventListener('mousewheel', handleMouseWheel);

      $menu.addEventListener('touchstart', handleTouchStart);
      $menu.addEventListener('touchmove', handleTouchMove);
      $menu.addEventListener('touchend', handleTouchEnd);

      $menu.addEventListener('mousedown', handleTouchStart);
      $menu.addEventListener('mousemove', handleTouchMove);
      $menu.addEventListener('mouseleave', handleTouchEnd);
      $menu.addEventListener('mouseup', handleTouchEnd);

      $menu.addEventListener('selectstart', () => { return false });


      // Resize
      // window.addEventListener('resize', () => {
      //   // menuHeight = $menu.clientHeight
      //   itemHeight = $items[0].clientHeight;
      //   wrapHeight = $items.length * itemHeight;
      // })


      // Render
      const render = () => {
        requestAnimationFrame(render);
        y = lerp(y, scrollY, .1);
        dispose(y);
        
        scrollSpeed = y - oldScrollY;
        oldScrollY = y;
        
        gsap.to($items, {
          scale: 1 -  Math.min(100, Math.abs(scrollSpeed)) * .005,
          rotate: scrollSpeed * 0.2
        })
      }
      render()
    },
  },
  mounted() {
    // this.cloneList();
    // this.cloneList();
    // this.cloneList();
    this.scrollAni();
  },
}
</script>

<style scoped>
.mainMenu{
  display: block;
  position: fixed;
  right: 70px; 
  bottom: 50px;
  z-index: 999;
  text-align: right;
}
.mainMenu > span{
  font-family: 'Domine', serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
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
  overflow-y: hidden;
  z-index: -1;
  opacity: 0;
  transition: all .4s;
}
.menuBtn ul{
  position: relative;
  left: 55%;
  top: 50%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateY(-50%);
  /* height: 70%; */
  /* scroll-snap-type: y mandatory; */
}
.mainMenu ul li {
  /* margin-bottom: 15px; */
  position: relative;
  /* scroll-snap-align: start; */
}
.mainMenu ul li:after{
  content: '';
  display: inline;
  width: 0;
  height: 2px;
  background: #fff;
  position: absolute;
  left: 0; 
  top: 50%;
  transform: translateY(-50%);
  transition: width .3s;
}
.mainMenu ul li:nth-child(1):hover:after,
.mainMenu ul li:nth-child(4):hover:after{
  width: 413px;
}
.mainMenu ul li:nth-child(2):hover:after,
.mainMenu ul li:nth-child(5):hover:after{
  width: 536px;
}
.mainMenu ul li:nth-child(3):hover:after,
.mainMenu ul li:nth-child(6):hover:after{
  width: 55px;
}
.mainMenu ul li span{
  font-size: 12px;
  color: #fff;
  display: block;
  position: absolute;
  left: -33px;
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
  position: relative; 
  left: 130px;
  bottom: 100px;
  z-index: 99;
  font-size: 1rem;
  font-family: 'Domine', serif;
  cursor: pointer;
  text-align: left;
}


.menu {
  /* height: 100vh; */
  overflow: hidden;
  background: #fff;
  cursor: grab;
}
.menu.is-dragging {
  cursor: grabbing;
}
.menu--item {
  /* counter-increment: count; */
  position: absolute;
  z-index: 1;
  top: 0;
  left: 33px;
  /* font-size: 120px; */
  line-height: 1.2;
  padding: 1rem 0;
  text-align: left;
}
@media (max-width: 767px) {
  .menu--item {
    font-size: 30px;
    padding: 1rem 0;
  }
}

</style>