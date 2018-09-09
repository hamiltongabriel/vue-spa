<template>
    <div class="card">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" :href="link" target="_blank">
                read more
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            link:{
               required:  true
            }
        }
    }
</script>

<style scoped>
    // definindo tamanho dos cards
    .card{
        padding-bottom: 40px;
        height: 100%;
    }
    /*definindo a posição do roda pé.*/
    footer{
        bottom: 0;
        width: 100%;
        left: 0;
    }
</style>