<template>
    <div class="card">
        <div class="card-content">
            <h3>{{ post.title }}</h3>
            {{ post.content }}
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" :href="post.link" target="_blank">
                read more
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post:{
               required:  true
            }
        }
    }
</script>

<style scoped>

</style>