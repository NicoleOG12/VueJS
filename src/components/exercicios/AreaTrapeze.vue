<template>
     <div>
        <p>Trapézio</p>
     </div>
    <form @submit.prevent="addTrapeze">
         <input type="text" v-model.number="B" placeholder="Base maior">
         <input type="text" v-model.number="b" placeholder="Base Menor">
         <input type="text" v-model.number="Height" placeholder="Altura">
  
         <button type="button" @click="addTrapeze">Calcular</button>
     </form>
  
     <div v-for="(trapeze, index) in trapezeList" :key="index">
         <p>Base Maior: {{ trapeze.B }}</p>
         <p>Base Menor: {{ trapeze.b }}</p>
         <p>Altura: {{ trapeze.Height}}</p>
         <p>Área: {{ trapeze.area }}</p>
         <br>
     </div>
     <br>
     <br>
 </template>
  
 <script>
 export default {
     data(){
         return {
             B: '',
             b: '',
             Height: '',
             trapezeList: []
         }
     },
     methods:{
         addTrapeze() {
             const area = ((this.B + this.b) * this.Height) / 2;
             this.trapezeList.push({
                 B: this.B,
                 b: this.b,
                 Height: this.Height,
                 area: area
             });
             
             // Limpar 
             this.B = '';
             this.b = '';
             this.Height = '';
         }
     }
 }
 </script>
  
 <style>
 body{
    
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