<template>
  <div class="mainMenu" :class="{ active : isShow }">
      <span @click="toggleMenu">MENU</span> 
      <div class="menuBtn menu">
        <ul class="menu--wrapper">
          <li class="menu--item" @click="unActive"><span>&#8560;</span><router-link to="/about">ABOUT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8561;</span><router-link to="/project">PROJECT</router-link></li>
          <li class="menu--item" @click="unActive"><span>&#8562;</span><router-link to="/contact">CONTACT</router-link></li>
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
    // wheelAnimation(){
    //   let before = 0;
    //   let menuBtn = document.querySelector('.menuBtn > ul');
    //   // let menuBtnItem = document.querySelector('.menuBtn > ul > li');
    //   menuBtn.addEventListener('wheel',()=>{
    //       if(before < window.scrollY) {
    //         console.log("scroll down", before);
    //       }
    //       else {
    //         console.log("scroll up", before);
    //       }
    //       before = window.scrollY;
    //   });

    // },
    // stylingFn(){
    //   // let menuItem = document.querySelectorAll('.menuBtn ul li');
    //   // menuItem.addEventListener('mouseenter', ()=>{      
    //   //   for(let i = 0; i < menuItem.length; i++){
    //   //     let item = menuItem[i];
    //   //     console.log(item);
    //   //     let rect = item.getBoundingClientRect();
    //   //     let top = parseInt(rect.top);
    //   //     let right = parseInt(rect.right);
    //   //     let bottom = parseInt(rect.bottom);
    //   //     let left = parseInt(rect.left);
    //   //     console.log(top, right, bottom, left);
    //   //     item.style.transition = 'all .3s';
    //   //     item.style.transform = `translate(10)`;
    //   //   }
    //   // });

    // },
    scrollAni(){
      const $menu = document.querySelector('.menu')
      const $items = document.querySelectorAll('.menu--item')
      let itemHeight = $items[0].clientHeight
      let wrapHeight = $items.length * itemHeight

      let scrollSpeed = 0
      let oldScrollY = 0
      let scrollY = 0
      let y = 0

      // lerp
      const lerp = (v0, v1, t) => {
        return v0 * ( 1 - t ) + v1 * t
      }

      // dispose
      const dispose = (scroll) => {
        gsap.set($items, {
          y: (i) => {
            return i * itemHeight + scroll
          },
          modifiers: {
            y: (y) => {
              const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y))
              return `${s}px`
            }
          }
        })
      } 
      dispose(0)

            /*--------------------
      Wheel
      --------------------*/
      const handleMouseWheel = (e) => {
        scrollY -= e.deltaY  
      }


      /*--------------------
      Touch
      --------------------*/
      let touchStart = 0
      let touchY = 0
      let isDragging = false
      const handleTouchStart = (e) => {
        touchStart = e.clientY || e.touches[0].clientY
        isDragging = true
        $menu.classList.add('is-dragging')
      }
      const handleTouchMove = (e) => {
        if (!isDragging) return
        touchY = e.clientY || e.touches[0].clientY
        scrollY += (touchY - touchStart) * 2.5
        touchStart = touchY
      }
      const handleTouchEnd = () => {
        isDragging = false
        $menu.classList.remove('is-dragging')
      }


      /*--------------------
      Listeners
      --------------------*/
      $menu.addEventListener('mousewheel', handleMouseWheel)

      $menu.addEventListener('touchstart', handleTouchStart)
      $menu.addEventListener('touchmove', handleTouchMove)
      $menu.addEventListener('touchend', handleTouchEnd)

      $menu.addEventListener('mousedown', handleTouchStart)
      $menu.addEventListener('mousemove', handleTouchMove)
      $menu.addEventListener('mouseleave', handleTouchEnd)
      $menu.addEventListener('mouseup', handleTouchEnd)

      $menu.addEventListener('selectstart', () => { return false })


      /*--------------------
      Resize
      --------------------*/
      window.addEventListener('resize', () => {
        menuHeight = $menu.clientHeight
        itemHeight = $items[0].clientHeight
        wrapHeight = $items.length * itemHeight
      })


      /*--------------------
      Render
      --------------------*/
      const render = () => {
        requestAnimationFrame(render)
        y = lerp(y, scrollY, .1)
        dispose(y)
        
        scrollSpeed = y - oldScrollY
        oldScrollY = y
        
        gsap.to($items, {
          scale: 1 -  Math.min(100, Math.abs(scrollSpeed)) * .005,
          rotate: scrollSpeed * 0.2
        })
      }
      render()
    },
  },
  mounted() {
    this.cloneList();
    this.cloneList();
    this.cloneList();
    // this.wheelAnimation();
    // this.stylingFn();
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


.menu {
  height: 100vh;
  overflow: hidden;
  background: #fff;
  cursor: grab;
}
.menu.is-dragging {
  cursor: grabbing;
}
.menu ul {
  counter-reset: count;
}
.menu--item {
  counter-increment: count;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 120px;
  line-height: 1.2;
  padding: 2rem 0;
  text-align: center;
}
@media (max-width: 767px) {
  .menu--item {
    font-size: 10vw;
    padding: 1rem 0;
  }
}
.menu--item:nth-child(n+10):before {
  content: counter(count);
}
.menu--item button {
  color: #020000;
  text-decoration: none;
  position: relative;
  z-index: 1;
  display: inline-block;
  user-select: none;
  font-size: 120px;
  -webkit-appearance: none;
  background: none;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
  color: #020000;
  font-family: "Orelo-sw-db", serif;
  cursor: pointer;
}
@media (max-width: 767px) {
  .menu--item button {
    font-size: 10vw;
  }
}
.menu--item button:before {
  position: absolute;
  z-index: -1;
  left: 0;
  display: inline-block;
  transform: translateX(-100%) scale(0.4);
  content: "0" counter(count);
  color: #862929;
  font-family: cursive;
}

.version {
  display: inline-block;
  position: fixed;
  z-index: 1;
  text-decoration: none;
  background: #333;
  font-family: sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 10px;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  top: -30px;
  right: -60px;
  bottom: auto;
  transform: rotate(45deg);
  transform-origin: 0% 100%;
  border-radius: 0;
  padding: 8px 30px;
  font-size: 11px;
}
.version:before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100px;
  bottom: 0;
  right: 0%;
  background: transparent;
}
@media (max-width: 767px) {
  .version {
    transform: scale(0.6) rotate(45deg);
    right: -110px;
  }
}
</style>