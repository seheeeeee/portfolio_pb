<template>
   <div :class="{nightMode: isNightMode}">
        <div class="mainLogo">
            <router-link to="/home">
                <img class="mainlogo_bk" src="../img/logo_bk.png" alt="">
                <img class="mainlogo_w" src="../img/logo_w.png" alt="">
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isNightMode: false,
        }
    }
}
</script>

<style scoped>
.mainLogo{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: transparent;
    transition: all 0.3s;
}

.mainLogo{
    position: absolute;
    left: 70px; 
    top: 80px;
    z-index: 100;
}
.mainlogo_bk, .mainlogo_w{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all .3s;
    position: absolute;
}
.mainlogo_w{
    display: none;
}
.nightMode .mainLogo{
    background-color: #000;
}
.nightMode .mainlogo_bk{
    display: none;
}
</style>