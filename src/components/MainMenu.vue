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

<style scoped lang="scss">
.mainMenu {
  display: block;
  position: fixed;
  right: 70px;
  bottom: 50px;
  z-index: 990;
  text-align: right;

  > span {
      font: {
        family: $title-font;
        weight: 500;
        size: 1.5rem;
      }
      cursor: pointer;
  }

  &.active .menuBtn {
    height: 100vh;
    position: fixed;
    opacity: 1;
    z-index: 999;
  }

  .menuBtn {
    background-color: #000;
    width: 100vw;
    height: 0;
    position: absolute;
    right: -50px;
    top: -50px;
    padding: 100px 100px;
    overflow-y: hidden;
    z-index: -1;
    opacity: 0;
    transition: all .4s;
  }
}

.menuBtn ul {
  position: relative;
  left: 55%;
  top: 50%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateY(-50%);
}

.mainMenu ul li {
  position: relative;

  &::after {
    @include prefix(0,2px){
      background: $white;
      @include position(0, 50%, 0);
      transition: width .3s;
    }
  }

  &:nth-child(1):hover::after, &:nth-child(4):hover::after {
    width: 413px;
  }

  &:nth-child(2):hover::after, &:nth-child(5):hover::after {
    width: 536px;
  }

  &:nth-child(3):hover::after, &:nth-child(6):hover::after {
    width: 559px;
  }

  span {
    font-size: 12px;
    color: $white;
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

  &:hover span {
    border-color: rgba(255, 255, 255, 0.6);
  }

  a {
    color: $white;
    font: {
      size: 7rem;
      family: $title-font;
      weight: 100;
    }
  }
}

.removeBtn {
  position: relative;
  left: 130px;
  bottom: -120px;
  z-index: 99;
  font: {
    size: 1.5rem;
    family: $title-font;
  }
  color: $white;
  cursor: pointer;
  text-align: left;
}

.menu {
  overflow: hidden;
  background: $white;
  cursor: grab;

  &.is-dragging {
    cursor: grabbing;
  }
}

.menu--item {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 33px;
  line-height: 1.2;
  padding: 1rem 0;
  text-align: left;
}

@include mobile{
  .menu--item {
    font-size: 30px;
    padding: 1rem 0;
  }
}
</style>