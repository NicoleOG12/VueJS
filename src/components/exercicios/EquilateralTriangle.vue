<template>
     <div>
        <p>Triângulo Equilatero</p>
     </div>
    <form @submit.prevent="addEquilateralTriangle">
         <input type="text" v-model.number="side" placeholder="Lado">
  
         <button type="button" @click="addEquilateralTriangle">Calcular</button>
     </form>
  
     <div v-for="(triangle, index) in triangleList" :key="index">
         <p>Lado: {{ triangle.side }}</p>
         <p>Área: {{ triangle.area }}</p>
         <br>
     </div>
     <br>
     <br>
 </template>
  
 <script>
 export default {
     data(){
         return {
             side: '',
             triangleList: []
         }
     },
     methods:{
         addEquilateralTriangle() {
             const area = (Math.sqrt(3) / 4) * Math.pow(this.side, 2);
             this.triangleList.push({
                 side: this.side,
                 area: area.toFixed(2) 
             });
  
             // Limpar
             this.side = '';
         }
     }
 }
 </script>
  
 <style>
 body{
     background-color: black;
 }
 p{
     color: aliceblue;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     font-size: large;
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