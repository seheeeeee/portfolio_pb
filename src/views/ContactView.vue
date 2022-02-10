<template>
  <div class="contactWrap">
    <div class="titBox">
      <span>If there's anything you want to talk about,</span>
      <h1 class="title">Contact With Me</h1>
    </div>
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
      <div class="references">
        <strong>References</strong>
        <ul>
          <li><i class="fab fa-github"></i> <a href="https://github.com/seheeeeee/portfolio_pb" target="_blank">github</a></li>
          <li><i class="fab fa-blogger-b"></i> <a href="https://sehee94.tistory.com/" target="_blank">blog</a></li>
        </ul>
      </div>
      
    </div>
    <div class="part8">
          <p class="cc">
            &copy; 2022
          </p>
          <router-link to="/about">
          <p class="footer">
            <span>NEXT</span>
            <span class="box002">001 ABOUT</span>
          </p>
          </router-link>
        </div>
  </div>
</template>

<script>
import emailForm from '../components/EmailForm.vue';

export default {
  components: {
    emailForm,
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
  padding: 300px 0 100px;
  position: relative;
  overflow-x: hidden;
}
.contactWrap h1{
  font-size: 7.5rem;
}
.titBox span{
  display: block;
  transform: translateY(-80px);
  font-size: 1.5rem;
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
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
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  font-size: 35px;
  color: #1f1f1f;
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
.content .references{
  margin: 50px 0 500px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.content .references strong{
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
.content .references ul {
  margin-top: 30px;
}
.part8{
  position: relative;
  width: 100%;
  text-align: center;
}
.part8 .cc{
  font-size: 20rem;
}
.part8 .footer {
  margin: 0 auto;
  padding: 50px 0;
  width: 70%;
  max-width: 1317px;
  border-top: 0.5px solid rgb(75, 75, 75);
  border-bottom: 0.5px solid rgb(75, 75, 75);
}
.part8 .footer span{
  display: block;
}
.part8 .footer span:nth-child(1){
  text-align: left;
  font-weight: 300;
  font-size: 20px; 
}
.part8 .footer span:nth-child(2){
  text-align: center;
  font-size: 13rem; 
  letter-spacing: -13px;
  line-height: 1;
}
span.box002,
p.cc{
  font-family: 'Tinos', serif;
  white-space: nowrap;
  font-weight: 100;
}
.content .profileImg {
  width: 300px;
}
.content .profileImg img{
  width: 100%;
  display: block;
  aspect-ratio: 3/4;
}
</style>