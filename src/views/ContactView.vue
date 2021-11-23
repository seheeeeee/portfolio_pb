<template>
  <div class="contactWrap">
    <h1 class="title">Contact With Me</h1>
    <div class="content">
      <div class="email">
        <p class="circleAni">
          <span>&nbsp;</span>
          <span>S</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>E</span>
          <span>M</span>
          <span>A</span>
          <span>I</span>
          <span>L</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>E</span>
          <span>M</span>
          <span>A</span>
          <span>I</span>
          <span>L</span>
        </p>
        <email-form></email-form>
      </div>
      <div class="phone">
        <strong>Phone</strong>

      </div>
      <div class="references">
        <strong>References</strong>
        <ul>
          <li><i class="fab fa-github"></i>github <a href="https://github.com/seheeeeee/portfolio_pb">link</a></li>
          <li><i class="fab fa-blogger-b"></i>blog <a href="https://sehee94.tistory.com/">link</a></li>
        </ul>
      </div>
    </div>
    <num-box :pageNum="pageNum"></num-box>
  </div>
</template>

<script>
import numBox from '../components/numberBox.vue';
import emailForm from '../components/EmailForm.vue';

export default {
  components: {
    numBox,
    emailForm,
  },
  data(){
    return{
      pageNum: '003',
    }
  },
  methods: {
    circleAnimation(){
      let spell = document.querySelectorAll('.circleAni span');
      for(let i = 0; i < spell.length; i++){
        if(spell[i].innerText != 'L'){
          spell[i].style.transform = 'rotate('+10.60*i+'deg) translateX(-90%)';
        }else{
          spell[i].style.transform = 'rotate('+10.60*i+'deg) translateX(-230%)';
        }
      }      
    },
  },
  mounted(){
    this.circleAnimation();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap');

.contactWrap{
  width: 100%;
  padding: 300px 0;
  position: relative;
}
.contactWrap h1{
  font-size: 7.5rem;
}

.content{
  width: 100%;
  margin-top: 400px;
}
.content > div{
  /* width: 30%;
  max-width: 550px;
  min-width: 300px; */
  width: 50%;
}
.content strong{
  position: relative;
  font-size: 1.5rem;
  color: #000;
}
.numBox{
  position: absolute;
  right: 300px;
  top: 1660px;
  transform: translateX(50%);
}
.content .email{
  position: relative; left: 50%;
  transform: translateX(-50%);
  display: flex;
  vertical-align: middle;
}
.content .email form{
  width: 100%;
  max-width: 550px;
  min-width: 300px;
}
.content .email .circleAni{
  margin-right: 150px;
  width: 440px;
  height: 440px;
  position: relative;
  animation: spinAni 10s infinite linear;
  transform-origin: center center;
}
.content .email .circleAni span{
  padding: 0;
  font-family: 'Shippori Antique', sans-serif;
  font-weight: bold;
  font-size: 40px;
  width: 10px;
  height: 200px;
  display: block;
  text-align: center;
  position: absolute;
  left: 50%; top: 0%;
  transform-origin: bottom center;
}

@keyframes spinAni {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>