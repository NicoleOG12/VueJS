<template>
   <form @submit.prevent="addTrapeze"> 
        <input type="text" v-model="B" placeholder="Base maior">
        <input type="text" v-model="b" placeholder="Base Menor">
        <input type="text" v-model="Height" placeholder="Altura">

        <button type="button" @click="addTrapeze">Calcular</button>
    </form>

    <div v-for="(trapeze, index) in trapezeList" :key="index">
        <p>Base Maior: {{ trapeze.B }}</p> 
        <p>Base Menor: {{ trapeze.b }}</p> 
        <p>Altura: {{ trapeze.Height}}</p> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            B:'',
            b:'',
            Height:''

        }
    },
    methods:{
        addTrapeze() {
            function 
       
        }
    }
}

</script>

<style>
body{
    background-color: black;
     /*background-image: url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
  background-size: cover;*/
}
p{
    color: aliceblue;
}
button{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    background-color: rgb(255, 5, 138);
}
input{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;

}
</style>