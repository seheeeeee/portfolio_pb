<template>
  <div class="pubWrap">
    <h1 class="title">Web Publishing</h1>
    <div>
      <h2>Semantic Web</h2>
      <ul>
        <li v-for="item in items" :key="item"></li>
      </ul>
    </div>
    <router-link to="/Kwater"></router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items : [
        {
          subject : '관공서',
          pages : [
            {
              name : '수자원공사',
              src : '/수자원공사/index.html'
            },
            {
              name: '안산시청',
              src : '/안산시청/index.html'
            }
          ],
        }
      ],
    }
  },
}
</script>

<style scoped>
.pubWrap{
  width: 100%;
  height: 100vh;
  padding: 300px 0 200px;
}
</style>