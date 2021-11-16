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
            arr: [],
        }
    },
    methods: {
        fetchData(){
            let str = this.strTitle.split("");
            let strBox = document.querySelector('p');
            console.log(strBox);

                for(let i = 0; i < str.length; i++){
                    let para = document.createElement('span');
                    let node = document.createTextNode(str[i]);
                    para.appendChild(node);
                    strBox.appendChild(para);
                }
            

        },
        wheelAnimation(){
            let span = document.querySelectorAll('.strBox span');
            console.log(span);
            
            let before = 0;

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