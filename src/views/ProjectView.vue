<template>
  <div class="pjtWrap">
    <h1 class="title">Project</h1>
    <ul id="pjts">
      <li v-for="project in projects" :key="project.name">
        <router-link :to="{path : project.link}">
          <div class="bgBox">
            <h2>{{project.name}}</h2>
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
export default {
  data(){
    return {
      projects: [
        {
          name : 'Publishing',
          link : '/publishing',
          comment : 'HTML5, CSS3 를 사용하여 관공서, 쇼핑몰 등의 웹사이트를 퍼블리싱했습니다.',
        },
        {
          name : 'JavaScript',
          link : '/script',
          comment: 'vanila JavaScript 를 사용하여 js 미니 프로그램을 만들었습니다.',
        },
        {
          name : 'Vue.js FrameWork',
          link : '/scheduler',
          comment: 'Vue.js 프레임워크를 사용하여 스케쥴링 어플리케이션을 만들었습니다.',
        },
      ],
    }
  }
}
</script>

<style scoped>
.pjtWrap{
  width: 100%;
  /* height: 100vh; */
  padding: 300px 0;
}

#pjts{
  width: 100%;
  height: 100%;
}
#pjts li{
  margin-bottom: 200px;
}
.bgBox{
  margin: 0 auto;
  width: 50%;
  max-width: 700px;
  height: 500px;
  background-color: rgba(0,0,0,0.5);
  transition: all .5s;
}
.bgBox:hover{
  background-color: rgba(0,0,0,0.8);
}
</style>