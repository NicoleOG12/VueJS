<template>
  <MyButton label="Um botão"/>
  <LoopComponent></LoopComponent>

</template>

<script>
import MyButton from './components/MyButton.vue'
import LoopComponent from './components/LoopComponent.vue';

export default {
  name: 'App',
  components: {
    MyButton, LoopComponent
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
