<template>
  <div id="app">
    <page-header :login="$store.state.main.login"></page-header>
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

.popup-top {
  background-color: #d6a12c !important;
  color: #ffffff !important;
  width: 100%;
  opacity: .8;
  height: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
}
</style>
