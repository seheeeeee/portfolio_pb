<template>
  <div class="contactWrap">
    <h1 class="underBar title">Contact With Me</h1>
    <div class="content">
      <div class="email">
        <strong class="underBar">Email</strong>
      </div>
      <div class="phone">
        <strong class="underBar">Phone</strong>

      </div>
      <div class="references">
        <strong class="underBar">References</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contactWrap{
  width: 100%;
  height: 100vh;
  padding: 300px 0;
}
.contactWrap h1{
  font-size: 7.5rem;
}

.content{
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.content > div{
  flex: 1;
  text-align: center;
}
.content strong{
  position: relative;
  font-size: 1.5rem;
  color: #000;
}
</style>