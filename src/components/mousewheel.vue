<template>
  <div :class="strClass">
    <p class="strBox">
    </p>
  </div>
</template>

<script>
export default {
    props: ['pjtTitle'],
    data(){
        return{
            strTitle: this.pjtTitle,
            strClass: this.pjtTitle.replace(/ /g, "").replace('.', ""),
            nextBox: '',
            count: 1,
        }
    },
    methods: {
        fetchData(){
            let str = this.strTitle.split("");
            let strBox = document.querySelector(`.${this.strClass} .strBox`);

            let paraArr = document.createElement('div');
            for(let i = 0; i < str.length; i++){
                let para = document.createElement('span');
                let node = document.createTextNode(str[i]);
                para.appendChild(node);
                paraArr.appendChild(para);
            }
            strBox.appendChild(paraArr);
        },
        wheelAnimation(){
            let thisStrBox = document.querySelector(`.${this.strClass} .strBox`);
            let strBoxDiv = document.querySelector(`.${this.strClass} .strBox > div`);
            let before = 0;

            thisStrBox.addEventListener('wheel',()=>{

                if(before < window.scrollY) {
                    strBoxDiv.classList.add('scrolldown');
                    if(this.count < 3){
                        this.count++;
                    }else{
                        this.count = 1;
                    }
                    console.log("scroll down,"+ this.count);
                    this.sendDownEvent();
                }
                else if(before > window.scrollY){
                    strBoxDiv.classList.remove('scrolldown');
                    if(this.count > 1){
                        this.count--;
                    }else{
                        this.count = 3;
                    }
                    console.log("scroll up,"+ this.count);

                }
                before = window.scrollY;
            });
        },
        sendDownEvent(){
            this.$emit('wheel-down', this.count);
        },
        stylingFn(){
            let strBoxDiv = document.querySelector(`.${this.strClass} .strBox > div`);
            let strBoxSpan = document.querySelectorAll(`.${this.strClass} .strBox > div span`);
            console.log(strBoxSpan);
            strBoxDiv.style.position = 'absolute';
            strBoxDiv.style.top = '50%';
            strBoxDiv.style.transform = 'translateY(-50%)';
            for(let i = 0; i < strBoxSpan.length; i++){
                // strBoxSpan[i].style.opacity = '0';
                strBoxSpan[i].style.transition = 'all .5s';
            }
        },        
    },
    mounted(){
        this.fetchData();
        this.wheelAnimation();
        this.stylingFn();
    },
}
</script>

<style scoped lang="scss">
div{
    width: 100%;
    text-align: center;
}
.strBox{
    font-size: 18rem;
    font-family: $title-font;
    font-weight: 300;
    letter-spacing: -8px;
    color: $t-black;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;

    span{
        display: inline-block;
        transform: translateY(-300px);
        transition: all 1s;
    }
}
</style>