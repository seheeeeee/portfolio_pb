<template>
  <div class="pubWrap">
    <h1 class="title">Web Publishing</h1>
    <section class="semantic">
      <h2>Semantic Web</h2>
      <ul>
        <li v-for="semanticPage in semanticPages" :key="semanticPage.name">
          <!-- <span class="itemTit">{{semanticPage.name}}</span> -->
          <div class="content">
            <router-link :to="{path : semanticPage.link}" target="_blank">
              <div class="imgBox">
                <img :src="require(`../../img/${semanticPage.pageImgURL}`)" alt="">
              </div>
            </router-link>
            <div class="detailBox">
              {{semanticPage.content}}
            </div>
          </div>
        </li>
      </ul>
    </section>
    <num-box :pageNum="pageNum"></num-box>
    <section class="responsive">
      <h2>Responsive Web</h2>
      <ul>
        <li v-for="responsivePage in responsivePages" :key="responsivePage.name">
          <!-- <span class="itemTit">{{responsivePage.name}}</span> -->
          <div class="content">
            <router-link :to="{path : responsivePage.link}" target="_blank">
              <div class="imgBox">
                <img :src="require(`../../img/${responsivePage.pageImgURL}`)" alt="">
              </div>
            </router-link>
            <div class="detailBox">
              {{responsivePage.content}}
            </div>
            <router-link :to="{path : responsivePage.link}" target="_blank">
              <div class="mimgBox">
                <img :src="require(`../../img/${responsivePage.mPageImgURL[0]}`)" alt="">
                <img :src="require(`../../img/${responsivePage.mPageImgURL[1]}`)" alt="">
              </div>
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
    components: {
    numBox,
  },
  data(){
    return {
      semanticPages: [
        {
          name : 'K-WATER',
          link : '/site-kwater',
          pageImgURL: 'kWater1.png',
          content: 'K-Water. marked up using HTML and CSS and created an automatic banner width JS.'
        },
        {
          name : 'ANSAN CITY',
          link : '/site-ansan',
          pageImgURL: 'ansan1.png',
          content: 'Ansan-city. marked up using HTML and CSS and created an automatic banner width JS.'
        },
      ],
      responsivePages: [
        {
          name : '29CM',
          link : '/site-29CM',
          pageImgURL: '29cm1.png',
          mPageImgURL: ['m_29cm1.png', 'm_29cm2.png'],
          content: '29CM. marked up using HTML and CSS and created an automatic banner width JS. Also, It is designed as a responsive web layout.'
        },
      ],
      pageNum: '004',
    }
  },
  methods:{
    showContent(){
      window.addEventListener('scroll', () =>{
        let pageYOffset = parseInt(window.pageYOffset);
        // console.log(parseInt(pageYOffset));

        let semantic = document.querySelectorAll('.semantic .content');
        let responsive = document.querySelector('.responsive .content');
        let mResponsive = document.querySelector('.responsive .content .mimgBox');
        
        for(var i = 0; i < semantic.length; i++){
          if(pageYOffset > semantic[i].offsetTop-500){
              semantic[i].classList.add("show");
          }
        }
        if(pageYOffset > responsive.offsetTop-500){
            responsive.classList.add("show");
        }
        if(pageYOffset > mResponsive.offsetTop-700){
            mResponsive.classList.add("show");
        }
      })
    },
    removeShow(){
        let semantic = document.querySelectorAll('.semantic .content');
        let responsive = document.querySelector('.responsive .content');
        let mResponsive = document.querySelector('.responsive .content .mimgBox');

        for(var i = 0; i < semantic.length; i++){
          semantic[i].classList.remove("show");
        }
        responsive.classList.remove("show");
        mResponsive.classList.remove("show");

    }
  },
  mounted() {
    this.showContent();
  },
  beforeDestroy(){
    this.removeShow();
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
  margin: 700px 5% 0;
  font-family: 'Barlow', sans-serif;
  width: 90%;
  height: 100%;
  text-align: center;
  padding-bottom: 300px;
  /* border-bottom: 1px solid green; */
}
.pubWrap section:nth-of-type(1){
  margin-top: 425px;
  margin-bottom: 350px;
}
.pubWrap section h2{
  width: 80%;
  color: #fff;
  background-color: #1f1f1f;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 200px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transform: translateX(-400px);
}
.pubWrap section ul{
  margin: 0 auto;
  width: 100%;
  /* min-width: 400px;
  max-width: 700px; */
  height: 100%;
  /* display: flex;
  justify-content: space-around; */
  
}
.pubWrap section ul li{
  flex: 1;
  /* border: 1px solid red; */
  padding: 50px 30px;
  margin-top: 400px;
}
.pubWrap section ul li:first-child{
  margin-top: 0;
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
  margin: 0 auto 30px;
  height: 100%;
  position: relative;
}
.pubWrap section .content .imgBox::after{
  opacity: 0;
  transition: all .7s;
}
.pubWrap section .content .imgBox:hover::before{
  content: 'view more';
  color: #fff;
  font-size: 40px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  letter-spacing: -2.5px;
  text-shadow: 0px 0px 5px rgba(0,0,0,1);
  text-align: center;
  background: url('../../img/diagonal.png');
  border-radius: 20px 20px 0 20px;
  display: block;
  width: 200px;
  height: 60px;
  line-height: 51px;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 11;
  opacity: 0.8;
}
.pubWrap section .content .imgBox:hover::after{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute; 
  left: 0;
  top: 0;
  z-index: 10;
  opacity: 0.6;
}
.pubWrap section .content .imgBox img{
  display: block;
  width: 100%;
}

.pubWrap section .content .detailBox{
  width: 90%;
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  font-size: 35px;
  line-height: 1.4;
  letter-spacing: -1px;
  margin: 180px auto 50px;
  text-align: right;
}
.mimgBox{
  width: 90%;
  margin: 350px auto 0;
}
.mimgBox img{
  display: inline-block;
  width: 40%;
  min-width: 400px;
  margin-right: 300px;
}
.mimgBox img:nth-child(2){
  margin-right: 0;
  transform: translateY(300px);
  width: 30%;
  min-width: 300px;
}
.semantic .content .imgBox,
.responsive .content .imgBox,
.responsive .content .mimgBox{
  opacity: 0;
  transform: scale(1.3); 
  transform-origin: center;
  transition: all .8s;
}
.semantic .content.show .imgBox,
.responsive .content.show .imgBox,
.responsive .content .mimgBox.show{
  opacity: 1;
  transform: scale(1);
}
</style>