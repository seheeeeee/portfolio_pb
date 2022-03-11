<template>
  <div class="pubWrap">
    <h1 class="title">Web Sites</h1>
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
    <top-btn></top-btn>
  </div>
</template>

<script>
import numBox from '../../components/numberBox.vue';
import topBtn from '../../components/TopButton.vue';

export default {
    components: {
    numBox,
    topBtn,
  },
  data(){
    return {
      semanticPages: [
        {
          name : 'K-WATER',
          link : '/site-kwater',
          pageImgURL: 'kWater1.png',
          content: 'K-Water. marked up using HTML and CSS.'
        },
        {
          name : 'ANSAN CITY',
          link : '/site-ansancity',
          pageImgURL: 'ansan1.png',
          content: 'Ansan-city. marked up using HTML and CSS.'
        },
      ],
      responsivePages: [
        {
          name : '29CM',
          link : '/site-29cm',
          pageImgURL: '29cm1.png',
          mPageImgURL: ['m_29cm1.png', 'm_29cm2.png'],
          content: '29CM. marked up using HTML and CSS and created an automatic banner with JS. Also, It is designed as a responsive web layout.'
        },
        {
          name : 'LotteHotelShop',
          link : '/site-LotteHotelShop',
          pageImgURL: 'LotteHotelShop1.png',
          mPageImgURL: ['m_LotteHotelShop1.png', 'm_LotteHotelShop2.png'],
          content: 'LOTTE HOTEL e-SHOP. marked up using HTML and SCSS and created an automatic banner with JS. Also, It is designed as a responsive web layout.'
        },
      ],
      pageNum: '004',
    }
  },
  methods:{
    showContent(){
      window.addEventListener('scroll', () =>{
        const pageYOffset = parseInt(window.pageYOffset);
        const semantic = document.querySelectorAll('.semantic .content');
        const responsive = document.querySelectorAll('.responsive .content');
        const mResponsive = document.querySelectorAll('.responsive .content .mimgBox');
        
        const showClass = 'show';

        for(let i = 0; i < semantic.length; i++){
          if(pageYOffset > semantic[i].offsetTop-500){
              semantic[i].classList.add(showClass);
          }
        }
        for(let j = 0; j < responsive.length; j++){
          if(pageYOffset > responsive[j].offsetTop-500){
              responsive[j].classList.add(showClass);
          }
        }
        for(let m = 0; m < mResponsive.length; m++){
          if(pageYOffset > mResponsive[m].offsetTop-700){
              mResponsive[m].classList.add(showClass);
          }
        }
      })
    },
    removeShow(){
        const semantic = document.querySelectorAll('.semantic .content');
        const responsive = document.querySelector('.responsive .content');
        const mResponsive = document.querySelector('.responsive .content .mimgBox');

        const showClass = 'show';

        for(let i = 0; i < semantic.length; i++){
          semantic[i].classList.remove(showClass);
        }
        responsive.classList.remove(showClass);
        mResponsive.classList.remove(showClass);

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

<style scoped lang="scss">
.pubWrap {
  width: 100%;
  height: 100%;
  padding: 300px 0 200px;

  section {
    margin: 700px 5% 0;
    font-family: $content-font;
    width: 90%;
    height: 100%;
    text-align: center;
    padding-bottom: 300px;

    &:nth-of-type(1) {
      margin-top: 425px;
      margin-bottom: 350px;
    }

    h2 {
      margin-bottom: 200px;
      width: 80%;
      color: $white;
      background-color: $black;
      font: {
        weight: 700;
        size: 2rem;
      }
      line-height: 1.2;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      transform: translateX(-400px);
    }

    ul {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      li {
        flex: 1;
        padding: 50px 30px;
        margin-top: 400px;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}

.itemTit {
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  color: $black;
  font-weight: 900;
}

.pubWrap section .content {
  text-align: center;

  .imgBox {
    width: 90%;
    margin: 0 auto 30px;
    height: 100%;
    position: relative;
    
    &::after {
      content: '';
      opacity: 0;
      transition: all .7s;
    }

    &:hover {
      &::before {
        content: 'view more';
        @include position(50%, 50%, 200px);
        display: block;
        width: 200px;
        height: 60px;
        line-height: 51px;

        font: {
          size: 40px;
          weight: 500;
        }
        text: {
          shadow: 0px 0px 5px $t-black;
          align: center;
        }
        letter-spacing: -2.5px;
        border-radius: 20px 20px 0 20px;
        color: $white;        
        z-index: 11;
        opacity: 0.8;
      }

      &::after {
        @include prefix(100%,100%){
          background: $t-black;
          @include position(0,0,100%);
          z-index: 10;
          opacity: 0.6;
        };
      }
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .detailBox {
    width: 90%;
    margin: 180px auto 50px;
    font: {
      family: $content-font;
      weight: 300;
      size: 35px;
    }
    line-height: 1.4;
    letter-spacing: -1px;
    text-align: right;
    word-break: keep-all;
  }
}

.mimgBox {
  width: 90%;
  margin: 350px auto 0;

  img {
    display: inline-block;
    width: 40%;
    min-width: 400px;
    margin-right: 300px;

    &:nth-child(2) {
      margin-right: 0;
      transform: translateY(300px);
      width: 30%;
      min-width: 300px;
    }
  }
}

.semantic .content .imgBox {
  opacity: 0;
  transform: scale(1.3);
  transform-origin: center;
  transition: all .8s;
}

.responsive .content {
  .imgBox, .mimgBox {
    opacity: 0;
    transform: scale(1.3);
    transform-origin: center;
    transition: all .8s;
  }
}

.semantic .content.show .imgBox {
  opacity: 1;
  transform: scale(1);
}

.responsive {
  .content {
    &.show .imgBox, .mimgBox.show {
      opacity: 1;
      transform: scale(1);
    }
  }

  li {
    margin-bottom: 100px;
  }
}
</style>