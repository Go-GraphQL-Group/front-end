<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
import pageHeader from '@/components/common/pageHeader.vue'
export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background-color: #272B30;
}
</style>
