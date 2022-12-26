<template>
  <div id="app">
    
    This is simpleform:
    <simpleform></simpleform>
  </div>
</template>

<script>
import simpleform from './components/simple-form.vue'

export default {
  name: 'app',
  components: {
    simpleform
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
  margin-top: 60px;
}
</style>
