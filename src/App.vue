<template>
  <div>
    <nav>
      <router-link to="/Home"> Home</router-link>
      <router-link to="/AreaTrapeze"> Trapeze</router-link>
      <router-link to="/CircleArea"> Circle</router-link>
      <router-link to="/EquilateralTriangle"> Triângulo Equilatero</router-link>
      <router-link to="/SobreNos"> Sobre Nós</router-link>
    </nav>
  </div>
  <router-View></router-View>
</template>

<script>

export default {
  name: 'App',

  }

</script>

<style>
#app {
  background-image:url(https://images.app.goo.gl/tUkbf2CLc8V7gjVS6);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

</style>
