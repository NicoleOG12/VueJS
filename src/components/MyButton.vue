<template>
    <div>
        <p @click="handleClick">
             Meu parágrafo é: {{ paragraph }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['paragraph'],
    methods: {
        handleClick() {
            console.log ('Eu cliquei no parágrafo');
        }
    }
}
</script>

<style>
p {
    background-color: pink;
    font-weight: 200;
    cursor: pointer;
}
</style>