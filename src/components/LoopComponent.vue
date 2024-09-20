<template>
    <div>
        <form @submit.prevent="addItem">
            <input type="text" v-model="inputValue">
            <button>Adicionar</button>
        </form>
        <table style="border: 3px solid, rgb(255, 0, 170) ;">
            <tr>
                <td>Index</td>
                <td>Key</td>
            </tr>
        
            <tr v-for="(item, index) in itens" :key="index">
               <td>{{ index }}</td>
               <td>{{ item }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itens:[ ],
            inputValue: ''
        }
    },
    methods:{
        addItem(){
            this.itens.push(this.inputValue)
            this.inputValue= ''
        }
    }
}
</script>

<style>
table, td, tr{
    border: 3px solid rgb(255, 0, 170);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
input, button{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
    border: 3px solid rgb(255, 0, 170);
    text-align: center;
}
</style>