<template>
 
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <HelloVue />
  <Todos/> -->
  <Count/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloVue from './components/HelloVue.vue';
// import Todos from './components/Todos.vue';
import Count from './components/Count.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Todos,
    // HelloVue
    Count
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
