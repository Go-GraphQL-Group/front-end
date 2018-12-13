<template>
  <mu-appbar id="bar" text-color="#FFE300" color="#1C1E22">
    <span id="#title" >SWAPI</span>
    <mu-button slot="right" style="background-color: #1C1E22;color: #FFFFFF;font-size: 15px;">Login</mu-button>
  </mu-appbar>
</template>

<script type="text/javascript">
export default {
  name: 'page-header'
}
</script>

<style scoped>
#bar {
  width: 100%;
  height: 40px;
  padding-left: 15px;
  padding-top: 35px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}
#title {
  color: #FFE300;
  font-size: 30px;
  font-weight: bold;
}
</style>
