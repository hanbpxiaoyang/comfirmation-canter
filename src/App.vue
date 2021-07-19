
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {}
};
</script>

<style lang="less">
@import './main.less';
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
/*修改滚动条样式*/
div::-webkit-scrollbar{
  width:3px;
  height:3px;
  /**/
}
div::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
div::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:3px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #bfbfbf;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>
