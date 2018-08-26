<template>
  <div id="app">
       <button @click="alert">test</button>
        <ul >
            <li  ref="lk" :key="22">lk</li>
            <li  ref="lk" :key="21">lk888</li>
            <li v-for="i in 4" ref="li" :key="i">li</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
        alert(){
            var lk=this.$refs.lk
            var li=this.$refs.li
            console.log(lk)
            console.log(li)
            console.log(li[0]);
        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
