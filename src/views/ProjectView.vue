<template>
  <div class="pjtWrap">
    <!-- <h1 class="title">Project</h1> -->
    <ul id="pjts">
      <li v-for="project in projects" :key="project.name">
        <router-link :to="{path : project.link}">
          <div class="bgBox">
            <h3 class="title">
              {{project.name}}
            </h3>
            <div class="comment">
              {{project.comment}}
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <div class="part8">
          <p class="cc">
            &copy; 2022
          </p>
          <router-link to="/contact">
            <p class="footer">
              <span>NEXT</span>
              <span class="box002">003 CONTACT</span>
            </p>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import numBox from '../components/numberBox.vue';
import { pageHeight } from '../api/index';
import { Slider } from '../api/index';

export default {
  components: {
    // numBox,
    // mouseWheel,
  },
  data(){
    return {
      projects: [
        {
          name : 'Web Sites',
          link : '/publishing',
          comment : 'HTML5, CSS3 를 이용하여 관공서, 쇼핑몰 등의 웹사이트를 퍼블리싱하였습니다.',
        },
        {
          name : 'Guess the word',
          link : '/GuessTheWord',
          comment : 'HTML5, SCSS, javascript을 이용하여 영어 단어 맞추기 application을 구성하였습니다.',
        },
        {
          name : 'Vue.js instagram',
          link : '/instagram',
          comment: 'Vue.js(Vue-cli3)를 이용하여 instagram-clone application을 구성하였습니다.',
        },
        {
          name : 'Vue.js schedule',
          link : '/scheduler',
          comment: 'Vue.js(Vue-cli3)를 이용하여 schedule application을 구성하였습니다.',
        },
      ],
      pageNum: '002',
    }
  },
  methods: {
    // nextListItem(count){
    //   console.log('event receive', count);
    //   let pjtList = document.querySelectorAll('#pjts li');
    //   if(1< count <= 3){
    //     this.downPageMotion(pjtList, count)
    //     pjtList[count-1].style.zIndex = '10';
    //     pjtList[count-2].style.zIndex = '1';
    //   }else if(count == 1){
    //     this.downPageOpMotion(pjtList, 1)
    //     pjtList[count-1].style.zIndex = '10';
    //     pjtList[2].style.zIndex = '1';
    //   }
    //   // this.resetClass(pjtList);
    // },
    // resetClass(obj){
    //   for(let i = 0; i < obj.length; i++){
    //     obj[i].className = '';
    //   }
    // },
    // downPageMotion(obj, index){
    //   let onItems = obj[index-1].querySelectorAll('span');
    //   let preItems = obj[index-2].querySelectorAll('span');
      
    //   for(let i = 0; i < onItems.length; i++){
    //     onItems[i].style.transform = 'translateY(0)';
    //     onItems[i].style.opacity = '1';
    //   }
    //   for(let i = 0; i < preItems.length; i++){
    //     preItems[i].style.transform = 'translateY(-200%)';
    //     // preItems[i].style.opacity = '0';
    //   }
    // },
    // downPageOpMotion(obj, index){
    //   let onItems = obj[index-1].querySelectorAll('span');
    //   let preItems = obj[2].querySelectorAll('span');
      
    //   for(let i = 0; i < onItems.length; i++){
    //     onItems[i].style.transform = 'translateY(0)';
    //     onItems[i].style.opacity = '1';
    //   }
    //   for(let i = 0; i < preItems.length; i++){
    //     preItems[i].style.transform = 'translateY(-200%)';
    //     // preItems[i].style.opacity = '0';
    //   }
    // }
    autoPaddingTop(){
      let vh = window.innerHeight;
      let vw = window.innerWidth;
      let bgBox = document.querySelectorAll('.bgBox');
      for(let i = 0; i < bgBox.length; i++){
        if(vw > 766){
          bgBox[i].style.paddingTop = `${vh*0.4}px`;
        }else{
          bgBox[i].style.paddingTop = `${vh*0.35}px`;
        }
      }
    },
    resizeBoxHeight(){
      var boxes = document.querySelectorAll('#pjts li');
      for (var i = 0; i < boxes.length; i++){
        var box = boxes[i];
        box.style.height = (window.innerHeight) + 'px';
      }
    },
  },
  mounted(){
    let wrap = document.querySelector('.pjtWrap');
    let pjts = document.querySelector('#pjts');
    let project = document.querySelectorAll('#pjts > li');
    // let projects = document.querySelector('#pjts');
    pageHeight(wrap);
    for(let i = 0; i < project.length; i++){
      pageHeight(project[i]);
    }
    Slider(pjts);
    this.autoPaddingTop();
    window.addEventListener('resize', this.autoPaddingTop);
    window.addEventListener('resize', this.resizeBoxHeight());
  },
  destroyed(){ 
    window.removeEventListener('resize', this.autoPaddingTop);
  }
}
</script>

<style scoped lang="scss">
.pjtWrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.title {
  // word-break: keep-all;
  white-space: nowrap;
  @media (max-width: 1800px){font-size: 10rem;}
}

#pjts {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  li {
    width: 100%;
    opacity: 1;
    transition: all .7s;
    position: absolute;
    bottom: -100%;

    &:first-child {
      bottom: 0;
    }
  }
}

.bgBox {
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;

  .comment {
    padding-top: 30px;
    font: {
      family: $korean-font;
      size: 1.5rem;
      weight: 300;
    }
  }
}

.part8 {@include part8;}

@include mobile{
  .title{
    font-size: 6rem;
    white-space: normal;
    word-break: keep-all;
  }

  #pjts li{
    &:first-child .bgBox{ 
      h3{
        padding-top: 50px;
      }
    }
    .comment{
      padding: 30px 40px 0;
      font-size: 16px;
      word-break: keep-all;
    }
  }
  .part8{
    padding-top: 0;
    @include position(50%, 50%, 100%);
  }
}
</style>