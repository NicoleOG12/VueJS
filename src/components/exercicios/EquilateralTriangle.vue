<template>
   <form @submit.prevent="addCalculo"> 
        <input type="text" v-model="name" placeholder="Nome">
        <input type="text" v-model="age" placeholder="Idade">
        <input type="text" v-model="document" placeholder="Documento">

        <button type="button" @click="addPerson">Adicionar</button>
    </form>
</template>

<script>
export default {

}
</script>

<style>
</style>