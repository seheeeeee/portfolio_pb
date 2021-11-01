<template>
  <div class="pubWrap">
    <h1 class="title">Web Publishing</h1>
    <section>
      <h2>Semantic Web</h2>
      <ul>
        <li v-for="semanticPage in semanticPages" :key="semanticPage.name">
          <span class="itemTit">{{semanticPage.name}}</span>
          <div class="content">
            <div class="imgBox">
              <p>img</p>
            </div>
            <div class="detailBox">
              {{semanticPage.content}}
            </div>
            <router-link :to="{path : semanticPage.link}" target="_blank">
              <button class="goBtn">Go on</button>
            </router-link>
          </div>
        </li>
      </ul>
    </section>
    <num-box :pageNum="pageNum"></num-box>
    <section>
      <h2>Responsive Web</h2>
      <ul>
        <li v-for="responsivePages in responsivePages" :key="responsivePages.name">
          <span class="itemTit">{{responsivePages.name}}</span>
          <div class="content">
            <div class="imgBox">
              <p>img</p>
            </div>
            <div class="detailBox">
              {{responsivePages.content}}
            </div>
            <router-link :to="{path : responsivePages.link}" target="_blank">
              <button class="goBtn">Go on</button>
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import numBox from '../../components/numberBox.vue';

export default {
  data(){
    return {
      semanticPages: [
        {
          name : '수자원공사',
          link : '/site-kwater',
          content: '수자원공사 홈페이지를 HTML5, CSS3를 이용하여 마크업하고 javascript로 자동 banner 구현하였습니다.'
        },
        {
          name : '안산시청',
          link : '/site-ansan',
          content: '안산시청 홈페이지를 HTML5, CSS3를 이용하여 마크업하고 javascript로 자동 banner 구현하였습니다.'
        },
      ],
      responsivePages: [
        {
           name : '29CM',
          link : '/site-29CM',
          content: '29CM 홈페이지를 HTML5, CSS3를 이용하여 마크업하고 반응형 웹으로 퍼블리싱하였습니다.'
        },
      ],
      pageNum: '004',
    }
  },
  components: {
    numBox,
  }
}
</script>

<style scoped>
.pubWrap{
  width: 100%;
  height: 100%;
  padding: 300px 0 200px;
}

.pubWrap section{
  margin: 0 5%;
  font-family: 'Barlow', sans-serif;
  width: 90%;
  height: 100%;
  text-align: center;
  padding-bottom: 300px;
  border-bottom: 1px solid green;
}
.pubWrap section h2{
  color: #1f1f1f;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.pubWrap section ul{
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  max-width: 700px;
  height: 100%;
  /* display: flex;
  justify-content: space-around; */
  
}
.pubWrap section ul li{
  flex: 1;
  border: 1px solid red;
  padding: 50px 30px;
}
.itemTit{
  display: block;
  font-size: 20px;
  color: #1f1f1f;
  font-weight: 900;
  margin-bottom: 20px;
}
.pubWrap section .content{
  text-align: center;
}
.pubWrap section .content .imgBox{
  width: 90%;
  margin-left: 5%;
  margin-bottom: 30px;
  height: 300px;
  background-color: #000;
}
.pubWrap section .content .detailBox{
  width: 90%;
  margin-left: 5%;
  text-align: left;
  font-size: 18px;
  margin-bottom: 50px;
}
.goBtn{
  padding: 5px 30px;
  font-size: 18px;
  background-color: lightcoral;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
  transition: all .3s;
}
.goBtn:hover,
.goBtn:focus{
  color: lightcoral;
  background-color: transparent;
  box-shadow: none;
}
</style>