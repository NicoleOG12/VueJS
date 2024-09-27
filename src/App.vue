<template>
  <AreaTrapeze></AreaTrapeze>
  <EquilateralTriangle></EquilateralTriangle>
  <CircleArea></CircleArea>

</template>

<script>
import AreaTrapeze from './components/exercicios/AreaTrapeze.vue';
import CircleArea from './components/exercicios/CircleArea.vue';
import EquilateralTriangle from './components/exercicios/EquilateralTriangle.vue';

export default {
  name: 'App',
  components: {
    AreaTrapeze, EquilateralTriangle, CircleArea
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
