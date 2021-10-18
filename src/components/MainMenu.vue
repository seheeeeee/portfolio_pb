<template>
  <div class="mainMenu">
      <div class="menuBtn" v-on:click="toggleMenu">
        <span>MENU</span>
        <ul>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/project">PROJECT</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
      </div>
      
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu(){
      
    }
  }
}
</script>

<style scoped>
.mainMenu{
  position: absolute;
  right: 50px; top: 50px;
  z-index: 999;
}
</style>