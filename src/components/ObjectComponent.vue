<template>
    <form @submit.prevent="addPerson"> 
        <input type="text" v-model="name" placeholder="Nome">
        <input type="text" v-model="age" placeholder="Idade">
        <input type="text" v-model="document" placeholder="Documento">

        <button type="button" @click="addPerson">Adicionar</button>
    </form>

    <div v-for="(person, index) in personList" :key="index">
        <p>ID: {{ index + 1 }}</p> 
        <p>Nome: {{ person.name }}</p> 
        <p>Idade: {{ person.age }}</p> 
        <p>Documento: {{ person.document }}</p> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            personList:[],
            name:'',
            age:'',
            document:''

        }
    },
    methods:{
        addPerson() {
            let person = {
                name: this.name,
                age: this.age,
                document: this.document,
            }
            this.personList.push(person)
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