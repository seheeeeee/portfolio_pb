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
      let bgBox = document.querySelectorAll('.bgBox');
      for(let i = 0; i < bgBox.length; i++){
        bgBox[i].style.paddingTop = `${vh*0.4}px`;
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

<style scoped>
.pjtWrap{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.title{
  word-break: keep-all;
}
#pjts{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
#pjts li{
  width: 100%;
  opacity: 1;
  transition: all .7s;
  position: absolute;
  bottom: -100%;
}
#pjts li:first-child{
  bottom: 0;
}
.bgBox{
  width: 100%;
  /* max-width: 700px; */
  height: 100%;
  text-align: center;
  box-sizing: border-box;
}

.bgBox .comment{
  padding-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
}
.bgBox .title{
  font-family: 'Domine', serif;
  font-size: 15em;
}
.part8{
  padding-top: 400px;
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
  font-size: 25px; 
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

</style>