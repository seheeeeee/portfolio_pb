<template>
  <div class="aboutWrap">
      <div class="headerBox">
        <div class="titleBox">
          <span>Who am I?</span>
          <h1 class="title">LEE SE HEE</h1>
        </div>
      </div>
      <div class="content">
        <div class="image">
        </div>
        <div class="part1">
          <p>Welcome to my page</p>
          <p>SeHee is a person that makes alter-ego multidisciplinary design.</p>
        </div>
        <num-box :pageNum="pageNum"></num-box>
        <div class="part2">
          <p>
            We can’t predict the future even in a minute, we get to think of life as an inexhaustible well. 
            Yet everything happens only a certain number of times, and we can't even remember every single moment. 
          </p>
          <p>
            How many more times will you bring thought up of a certain afternoon in your childhood, 
            some afternoon that might be so deeply a part of your being that you can't imagine without it? 
            Perhaps five or six times more, Perhaps not even that.
          </p>
          <p>
            How many more times will you go somewhere that you want to?
            Perhaps thirty three times,
            And yet it all seems limitless like 
            it wouldn't make sense to count.
          </p>
        </div>
        <div class="part3">
          <p>
            we are stuck in the time-lapse.
            I catch invisible things there and then make that powerful stuff.
          </p>
          <p>
            <strong>Because our reality is a prototype</strong>
          </p>
        </div>
        <div class="part4">
          <p>
            <ul>
              <li>keep to build</li>
              <li>modern</li>
              <li>experiences</li>
              <li>develop</li>
              <li>with purpose</li>
              <li>together</li>
            </ul>
          </p>
        </div>
        <div class="part5 profile">
          <ul>
            <li class="subTit">Profile</li>
            <li>SEHEE LEE</li> 
            <li>1994. 07. 28</li>
            <li>Hwaseong-si, Gyeonggi-do</li>
            <li>euc728@naver.com</li>
            <li>010.2030.2414</li>
          </ul>
        </div>
        <div class="part6 strategy clearFix">
          <ul>
            <li class="subTit">Strategy</li>
            <li>user experience</li> 
            <li>user insights </li>
            <li>trends</li>
            <li>creative ideas</li> 
            <li>service mind</li>
            <li>interactive programing</li>
            <li>for user needs</li>
          </ul>
        </div>
        <div class="part7 strength">
          <ul class="skills">
            <li class="subTit">What I have</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>Photoshop</li>
            <li>Illustration</li>
          </ul>
          <ul class="character">
            <li class="subTit">character</li>
            <li>IMAGINATIVE</li>
            <li>CONSCIENTIOUS</li>
            <li>CHALLENGING</li>
            <li>ADAPTABLE</li>
            <li>ENTHUSIASTIC</li>
          </ul>
        </div>
        <div class="part8">
          <p class="cc">
            &copy; 2022
          </p>
          <router-link to="/project">
            <p class="footer">
              <span>NEXT</span>
              <span class="box002">002 PROJECT</span>
            </p>
          </router-link>
        </div>
      </div>
      <top-btn></top-btn>
  </div>
</template>

<script>
import numBox from '../components/numberBox.vue';
import topBtn from '../components/TopButton.vue';

export default {
  components: {
    numBox,
    topBtn
  },
  data(){
    return{
      pageNum: '001',
    }
  },
  methods: {
    showContent(){
      window.addEventListener('scroll', () =>{
        let pageYOffset = window.pageYOffset;
        // console.log(parseInt(pageYOffset));

        let part1 = document.querySelector('.part1');
        let part2 = document.querySelector('.part2');
        let part3 = document.querySelector('.part3');
        let part4 = document.querySelector('.part4');
        let part5 = document.querySelector('.part5');
        let part6 = document.querySelector('.part6');
        let part7 = document.querySelector('.part7');
        let part8 = document.querySelector('.part8');
        if(part1 != null){
        if(pageYOffset > part1.offsetTop){
            part1.classList.add("show");
        }else{
            part1.classList.remove("show");
        }
        if(pageYOffset > part2.offsetTop){
            part2.classList.add("show");
        }else{
            part2.classList.remove("show");
        }
        if(pageYOffset > part3.offsetTop){
            part3.classList.add("show");
        }else{
            part3.classList.remove("show");
        }
        if(pageYOffset > part4.offsetTop){
            part4.classList.add("show");
        }else{
            part4.classList.remove("show");
        }
        if(pageYOffset > part5.offsetTop){
            part5.classList.add("show");
        }else{
            part5.classList.remove("show");
        }
        if(pageYOffset > part6.offsetTop){
            part6.classList.add("show");
        }else{
            part6.classList.remove("show");
        }
        if(pageYOffset > part7.offsetTop){
            part7.classList.add("show");
        }else{
            part7.classList.remove("show");
        }
        if(pageYOffset > part8.offsetTop){
            part8.classList.add("show");
        }else{
            part8.classList.remove("show");
        }
        }
      })
    },
  },
  mounted() {
    this.showContent();
  },
}
</script>

<style scoped lang="scss">
.aboutWrap{
  overflow-x: hidden;
  text-align: center;
  padding: 300px 0 200px;
}

.titleBox span{@include subTitle;}

.content {
  transform: translateY(80px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div {
    font: {
      family: $content-font;
      weight: 300;
      size: 35px;
    }
    line-height: 1.4;
    letter-spacing: -1px;

    &:nth-child(1) {
      width: 35%;
      max-width: 470px;
    }

    &:nth-child(2) {
      width: 40%;
    }

    &:nth-child(3) {
      width: 50%;
      margin-top: 100px;
      margin-left: 50%;
    }

    &:nth-child(4), &:nth-child(5) {
      width: 100%;
      margin-top: 250px;
    }

    &:nth-child(6) {
      width: 100%;
      margin-top: 500px;
    }

    &:nth-child(7), &:nth-child(8), &:nth-child(9) {
      width: 100%;
      margin-top: 300px;
    }

    &:nth-child(10) {
      width: 100%;
      margin-top: 500px;
    }
  }

  .image {
    margin-left: 430px;
    height: 620px;
    background: url('../img/aboutImg1.jpg');
    background-size: cover;
  }

  .part1 {
    text-align: left;
    margin-left: 150px;
    word-break: keep-all;
  }

  .part2 {
    text-align: justify;
    position: relative;
    height: 1200px;

    p {
      position: absolute;
      top: 0;
      margin-bottom: 30px;
      width: 45%;
      max-width: 457px;

      &:nth-child(1) {
        left: 0;
        transform: translateX(100%);
      }

      &:nth-child(even) {
        right: 0;
        color: $gray;
        transform: translate(-100%, 100%);
      }

      &:nth-child(3) {
        left: 0;
        transform: translate(100%, 370%);
      }
    }
  }

  .part4 {
    transform: rotate(-15deg);
    font-size: 7rem;

    li {
      transform: translateX(-3000px);
      transition: all .5s;

      &:nth-child(1) {
        transition-delay: 0s;
      }

      &:nth-child(2) {
        transition-delay: 0.1s;
      }

      &:nth-child(3) {
        transition-delay: 0.2s;
      }

      &:nth-child(4) {
        transition-delay: 0.3s;
      }

      &:nth-child(5) {
        transition-delay: 0.4s;
      }

      &:nth-child(6) {
        transition-delay: 0.5s;
      }
    }

    &.show li {
      transform: translateX(-100px);
    }
  }
}

.subTit {
  color: $black;
  font: {
    weight: 700;
    size: 20px;
  }
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.content {
  span.box002, p.cc {
    white-space: nowrap;
    font: {
      family: $num-font;
      weight: 100;
    }
  }

  div {
    &.profile ul {
      width: 30%;
      text-align: left;
      float: right;
      margin-right: 200px;
    }

    &.strength {
      display: flex;
      justify-content: space-around;
    }
  }

  .part8 {
    .cc {
      font-size: 20rem;
    }

    .footer {
      margin: 0 auto;
      padding: 50px 0;
      width: 70%;
      max-width: 1317px;
      border-top: $border;
      border-bottom: $border;

      span {
        display: block;

        &:nth-child(1) {
          text-align: left;
          font-size: 25px;
        }

        &:nth-child(2) {
          text-align: center;
          font-size: 13rem;
          letter-spacing: -13px;
          line-height: 1;
        }
      }
    }
  }

  div {
    p, li {
      margin-top: 20px;
      opacity: 0;
      transition: all .5s;
    }

    &.show {
      p, li {
        margin-top: 0;
        transform: translateY(0px);
        opacity: 1;
      }
    }

    &.part8 {
      p {
        margin-top: -100px;
        opacity: 0;
        transition: all .5s;
      }

      &.show p {
        margin-top: 0;
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
}

/* show effect */
</style>