<template>
    <div>
        <p>Círculo</p>
     </div>
    <form @submit.prevent="addCircle">
         <input type="text" v-model.number="radius" placeholder="Raio">
  
         <button type="button" @click="addCircle">Calcular</button>
     </form>
  
     <div v-for="(circle, index) in circleList" :key="index">
         <p>Raio: {{ circle.radius }}</p>
         <p>Área: {{ circle.area }}</p>
         <br>
     </div>
     <br>
     <br>
 </template>
  
 <script>
 export default {
     data(){
         return {
             radius: '',
             circleList: []
         }
     },
     methods:{
         addCircle() {
             const area = Math.PI * Math.pow(this.radius, 2);
             this.circleList.push({
                 radius: this.radius,
                 area: area.toFixed(2)
             });
  
             this.radius = '';
         }
     }
 }
 </script>
  
 <style>
 body{
     
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