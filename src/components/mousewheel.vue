<template>
  <div :class="strClass">
    <p v-html="arrStrings" class="strBox"></p>
  </div>
</template>

<script>
export default {
    props: ['pjtTitle'],
    data(){
        return{
            strTitle: this.pjtTitle,
            strClass: this.pjtTitle.replace(/ /g, "").replace('.', ""),
            arr: [],
            arrStrings: '',
        }
    },
    methods: {
        fetchData(){
            let str = this.strTitle.split("");
            // console.log(this.arr);
            // let arr = this.arr;
            for(let i = 0; i < str.length; i++){
                this.arr.push('<span>'+str[i]+'</span>');
            }
            let arrString = this.arr.toString();
            this.arrStrings = arrString.replaceAll(',', "");
        },
        wheelAnimation(){
            let span = document.querySelectorAll('.strBox span');
            console.log(span);
            // window.__scrollPosition = document.documentElement.scrollTop || 0;

            // document.addEventListener('scroll', function(){
            //     let e = document.querySelector('.strBox');

            //     // let _documentY = document.documentElement.scrollTop;
            //     // let _direction = _documentY - window.__scrollPosition >= 0 ? 1 : -1;
            //     // console.log(_direction); // 콘솔창에 스크롤 방향을 출력

            //     // window.__scrollPosition = _documentY; // Update scrollY

            //     // if(_direction >= 1){
            //     //     e.classList.add('wheelDownPre');
            //     // }else if(_direction == -1){
            //     //     e.classList.remove('wheelDownPre');
            //     // }
                
            // });
            let before = 0;
            // let e = document.querySelector('.strBox');

            window.addEventListener('scroll',()=>{
                if(before < window.scrollY) {
                    span.style.transform = 'translateY(-200px)';
                }
                else {
                    span.style.transform = 'translateY(0)';
                }
                before = window.scrollY;
            });
        },
    },
    mounted(){
        this.fetchData();
        this.wheelAnimation();
    },
}
</script>

<style scoped>
div{
    width: 100%;
    text-align: center;
}
.strBox{
    font-size: 18rem;
    font-family: 'Domine', serif;
    font-weight: 300;
    letter-spacing: -8px;
    color: #000;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

/* wheel animation */
.strBox span{
    display: inline-block;
    transform: translateY(0);
    transition: all 1s;
}
.strBox.wheelDownPre span{
    transform: translateY(-200px);
}


</style>