<template>
  <div class="loadWrap" v-if="loadStatus">
    <div class="imgBox">
        <video width="300" height="450" autoplay="autoplay" muted="muted">
            <source :src="require('../img/loading.mp4')" type="video/mp4">
        </video>
        <div class="count">
            <span>0</span>
            <span class="bar"></span>
            <span>100</span>
        </div>
    </div>
    <div id="topBox" class="box"></div>
    <div id="btmBox" class="box"></div>
  </div>
</template>

<script>
export default {
    props: ['isLoading'],
    computed: {
        loadStatus: function(){
            return this.isLoading
        },
    },
}
</script>

<style scoped>
.loadWrap{
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: absolute; 
    left: 0;
    top: 0;
    z-index: 999;
}
.box{
    position: relative;
    width: 100%;
    height: 50vh !important;
    background-color: #000;
}
#topBox{
    animation: top 1.5s 6.5s;
}
#btmBox{
    animation: bottom 1.5s 6.5s;
}
@keyframes top {
    0%{
        transform: translateY(0);
    }
    99%{
        opacity: 0.7;
    }
    100%{
        transform: translateY(-120%);
    }
}
@keyframes bottom {
    0%{
        transform: translateY(0);
    }
    99%{
        opacity: 0.7;
    }
    100%{
        transform: translateY(120%);
    }
}
.imgBox{
    width: 600px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;
}
.imgBox video{
    filter: grayscale(70%);
    -webkit-filter: grayscale(70%);
    -moz-filter: grayscale(70%);
    -ms-filter: grayscale(70%);
    -o-filter: grayscale(70%);
    animation: videoScale 2.2s 5.8s ease-out;
}
@keyframes videoScale {
    0%{
        transform: scale(100%);
    }
    80%{
        transform: scale(160%);
    }
    100%{
        transform: scale(160%);
    }
}
.imgBox .count {
    margin-top: 40px;
}
.imgBox .count span{
    font-family: 'Domine', serif;
    font-size: 1rem;
    color: #fff;
    animation: opacity 2.7s 5.3s;
}
@keyframes opacity{
    0%{ opacity: 1; }
    30%{ opacity: 0; }
    100%{ opacity: 0; }
}
.imgBox .count span:nth-child(1), 
.imgBox .count span:nth-child(2){
    float: left;
}
.imgBox .count span:last-child{
    float: right;
}
.imgBox .count span.bar{
    display: inline-block;
    margin-left: 12px;
    margin-top: 8px;
    width: 90%;
    height: 1px;
    background: #fff;
    animation: bar 5.3s, opacity 2.7s 5.3s;
}
@keyframes bar {
    0%{
        width: 0;
    }
    100%{
        width: 90%;
    }
}
</style>