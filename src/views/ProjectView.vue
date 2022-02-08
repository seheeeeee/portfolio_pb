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
          comment : 'HTML5, CSS3 를 사용하여 관공서, 쇼핑몰 등의 웹사이트를 퍼블리싱했습니다.',
        },
        {
          name : 'JS projects',
          link : '/script',
          comment: 'vanila JavaScript 를 사용하여 js 미니 프로그램을 만들었습니다.',
        },
        {
          name : 'Vue.js fw',
          link : '/scheduler',
          comment: 'Vue.js 프레임워크를 사용하여 스케쥴링 어플리케이션을 만들었습니다.',
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
        bgBox[i].style.paddingTop = `${vh*0.45}px`;
      }
    }
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

#pjts{
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
}
#pjts li{
  width: 100%;
  border: 2px solid green;
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

.bgBox .content{
  /* height: 100%; */
}
</style>