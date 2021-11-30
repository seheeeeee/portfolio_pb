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
        }
    },
    methods: {
        fetchData(){
            let str = this.strTitle.split("");
            let strBox = document.querySelector(`.${this.strClass} .strBox`);

            var paraArr = document.createElement('div');
            for(let i = 0; i < str.length; i++){
                var para = document.createElement('span');
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
                    console.log("scroll down");
                    this.sendDownEvent();
                }
                else if(before > window.scrollY){
                    strBoxDiv.classList.remove('scrolldown');
                    console.log("scroll up");
                }
                before = window.scrollY;
            });
        },
        sendDownEvent(){
            this.$emit('scrollDown');
        },
        stylingFn(){
            let strBoxDiv = document.querySelector(`.${this.strClass} .strBox > div`);
            strBoxDiv.style.position = 'absolute';
            strBoxDiv.style.top = '50%';
            strBoxDiv.style.transform = 'translateY(-50%)';
        },
    },
    mounted(){
        this.fetchData();
        this.wheelAnimation();
        this.stylingFn();
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
    position: relative;
}

/* wheel animation */
.strBox span{
    display: inline-block;
    transform: translateY(-300px);
    transition: all 1s;
}

</style>