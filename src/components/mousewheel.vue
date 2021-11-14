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
    },
    mounted(){
        this.fetchData();
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
}
</style>