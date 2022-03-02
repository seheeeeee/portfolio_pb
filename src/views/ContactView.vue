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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap');

.contactWrap {
  width: 100%;
  padding: 300px 0 100px;
  position: relative;
  overflow-x: hidden;

  h1 {
    font-size: 7.5rem;
  }
}

.titBox span {
  @include subTitle;
}

.content {
  width: 100%;
  margin-top: 400px;

  > div {
    width: 50%;
    
    font: {
      family: $content-font;
      weight: 300;
      size: 35px;
    }
    color: $black;
  }

  strong {
    position: relative;
    font-size: 1.5rem;
    color: $t-black;
  }
}

.numBox {
  position: absolute;
  right: 300px;
  top: 1660px;
  transform: translateX(50%);
}

.content {
  .email {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    vertical-align: middle;

    form {
      width: 100%;
      max-width: 550px;
      min-width: 300px;
    }

    .circleAni {
      margin-right: 150px;
      width: 440px;
      height: 440px;
      position: relative;
      animation: spinAni 10s infinite linear;
      transform-origin: center center;

      span {
        padding: 0;
        font: {
          family: 'Shippori Antique', sans-serif;
          weight: bold;
          size: 40px;
        }
        width: 10px;
        height: 200px;
        display: block;
        text-align: center;
        @include position(50%, 0, 10px);
        transform-origin: bottom center;
      }
    }
  }

  .references {
    margin: 50px 0 500px;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    strong {
      font: {
        size: 20px;
        weight: 700;
      }
      text-transform: uppercase;
    }

    ul {
      margin-top: 30px;
    }
  }

  .profileImg {
    width: 300px;

    img {
      width: 100%;
      display: block;
      aspect-ratio: 3/4;
    }
  }
}

@keyframes spinAni {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.part8{ @include part8; }

</style>