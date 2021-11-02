<template>
  <div class="wheelWrap">

  </div>
</template>

<script>
export default {
    props: {
        pjtTitle: String,
    },
    data(){
        return{
            strTitle: this.pjtTitle,
        }
    },
    methods: {
        fetchData(){
            console.log(this.strTitle);
            let str = this.strTitle.split("");
            let arr = [];
            for(let i = 0; i < str.length; i++){
                arr.push('<span>'+str[i]+'</span>');
            }
            document.querySelector('.wheelWrap').innerHTML = arr.join('');
        }
    },
    mounted(){
        this.fetchData();
    },
}
</script>

<style>

</style>