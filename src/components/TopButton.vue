<template>
  <div class="btnWrap">
      <button class="topBtn">TOP</button>
  </div>
</template>

<script>
export default {
    mounted(){
        let topBtn = document.querySelector('.topBtn');
        topBtn.addEventListener('click',()=>{
            document.body.scrollIntoView({behavior: 'smooth'});
        })
    }
}
</script>

<style scoped>
.btnWrap{
    position: fixed;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
}
.topBtn{
    border: none;
    outline: none;
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    background: #000 url('../img/ico_top.png') no-repeat 50% 50%;
    background-size: 20px;
    text-indent: -9999px;
    opacity: 0.4;
    transition: opacity 0.3s;
}
.topBtn:hover{
    opacity: 0.7;
}
</style>