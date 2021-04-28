<template>
  <div id="app">
    <div @click="gotToPage('../0-home.html')">0-home.html</div>
    <div @click="gotToPage('../1-detail.html')">1-detail.html</div>
    <div @click="gotToPage('../2-list.html')">2-list.html</div>
    <div @click="gotToPage('../3-detail.html')">3-detail.html</div>
    <div @click="gotToPage('../4-list.html')">4-list.html</div>
    <div @click="gotToPage('../5-spa-one.html')">5-spa-one.html</div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
    }
  },
 
  methods: {
    gotToPage(page) {
      location.assign(page)
    }
  }
}
</script>

<style scoped>
#app div{
  width:460px;
  background: #409EFF;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #409EFF;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  margin: 30px auto;
  transition: .1s;
  font-weight: 500;
  padding: 24px 20px;
  font-size: 28px;
  border-radius: 10px;
}
</style>


