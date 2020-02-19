<template>
  <div id="app">
    <v_navmenu/>
    <img src="./assets/logo.png">
    <router-link to="/myhello">Go to myhello</router-link>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'

export default {
  name: 'App',
  components: {
    'v_navmenu': NavMenu
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
  margin-top: 0px;
}
</style>
