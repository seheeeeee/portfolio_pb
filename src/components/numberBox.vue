<template>
  <div class="numBox">
      {{this.num}}
  </div>
</template>

<script>
export default {
    props: ['pageNum'],
    data(){
        return{
            num : this.pageNum,
        }
    }
}
</script>

<style scoped lang="scss">
.numBox{
  padding-right: 50px;
  font-size: 20rem !important;
  text-align: right;
  line-height: 0;
  font-family: $num-font;
  white-space: nowrap;
}
</style>