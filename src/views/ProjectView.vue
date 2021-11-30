<template>
  <div class="pjtWrap">
    <h1 class="title">Project</h1>
    <ul id="pjts">
      <li v-for="project in projects" :key="project.name">
        <router-link :to="{path : project.link}">
          <div class="bgBox">
            <mouseWheel :pjtTitle="project.name" v-on:scrollDown="nextListItem()"></mouseWheel>
            <!-- <div class="comment">
              {{project.comment}}
            </div> -->
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <num-box :pageNum="pageNum"></num-box>
    <div class="part8">
      <p class="cc">
        &copy; 2021
      </p>
      <router-link to="/contact">
        <p class="footer">
          <span>NEXT</span>
          <span class="box002">003 CONTACT</span>
        </p>
      </router-link>
    </div> -->
  </div>
</template>

<script>
// import numBox from '../components/numberBox.vue';
import mouseWheel from '../components/mousewheel.vue';

export default {
  components: {
    // numBox,
    mouseWheel,
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
    nextListItem(){
      console.log('event receive');
    },
  },
}
</script>

<style scoped>
.pjtWrap{
  width: 100%;
  /* height: 100vh; */
  /* padding: 300px 0 100px; */
  padding-top: 300px;
  overflow-x: hidden;
  position: relative;
}

#pjts{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  border: 1px solid red;
}
#pjts li{
  /* margin-bottom: 700px; */
  scroll-snap-align: start;
  height: 100vh;
  border: 2px solid green;
}
/* #pjts li:first-child{
  margin-bottom: 1000px;
  margin-top: 600px;
} */
.bgBox{
  margin: 0 auto;
  width: 90%;
  /* max-width: 700px; */
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  transition: all .5s;
}
.bgBox:hover{
  background-color: rgba(0,0,0,0.8);
}
.bgBox > div{
  height: 100%;
}
.numBox{
  position: absolute;
  right: 300px;
  top: 2200px;
  transform: translateX(50%);
}
.part8{
  position: relative;
  width: 100%;
  text-align: center;
}
.part8 .cc{
  font-size: 25rem;
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
  font-size: 25px; 
  font-weight: 300;
}
.part8 .footer span:nth-child(2){
  text-align: center;
  font-size: 15rem; 
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