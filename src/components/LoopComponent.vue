<template>
    <div>
        <ul>
            <li v-for="(Item, index) in itens" :key="index">
                <b> index:</b>{{ Item }}
                <b>Key (item):</b>{{ Item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itens:[ 'Item 1', 'Item 2', 'Item 3']
        }
    },
    props:{

    }
}

</script>

<style>

</style>