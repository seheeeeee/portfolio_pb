<template>
  <div class="mainMenu" v-on:click="toggleMenu">
      <span>MENU</span> 
      <div class="menuBtn">
        <ul>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/project">PROJECT</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <div class="removeBtn">X</div>
      </div>
      
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu(){
      document.querySelector('.mainMenu').classList.add('active');
    }
  },
  beforeDestroy(){
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
  right: -50px;
  top: -50px;
}
.mainMenu .menuBtn{
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: -50px;
  top: -200vh;
  padding: 100px 100px;
  overflow: hidden;
  transition: all .7s;
}
.menuBtn ul{
  position: relative;
  left: 55%;

}
.mainMenu ul li {
  margin-bottom: 15px;
  position: relative;
}
.mainMenu ul li::before{
  color: #fff;
  display: block;
  position: absolute;
  left: -70px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  border: 0.5px solid transparent;
  transition: all .5s;
}
.mainMenu ul li:nth-child(1)::before{
  content: '\2170';
}
.mainMenu ul li:nth-child(2)::before{
  content: '\2171';
}
.mainMenu ul li:nth-child(3)::before{
  content: '\2172';
}
.mainMenu ul li:hover::before{
  border-color: #fff; 
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