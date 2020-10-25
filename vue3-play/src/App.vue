<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Life/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Life from './components/life.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Life
  }
}
</script>
