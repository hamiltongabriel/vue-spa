<template>
    <div class="columns">
        <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
           <app-post :link="post.rest_api_enabler.Link">
               <h3 slot="title" v-html="post.title.rendered"></h3>
               <span slot="content" v-html="post.excerpt.rendered"></span>
           </app-post>
        </div>
    </div>
</template>

<script>
    import Post from './Post'
    import appService from '../../service/app.service'
    export default {
        components: {
          'app-post': Post
        },
        name: "Category",
        data: () => ({
            id: '',
            posts: []
        }),
        methods: {
            loadPosts () {
                let categoryId = 2;
                if(this.id === 'mobile'){
                    categoryId = 11;
                }
                return this.idRender(categoryId)
            },
            idRender(categoryId){
                appService.getPosts(categoryId).then(data => {
                    this.posts = data
                })
            }
        },
        created () {
            this.id = this.$route.params.id,
            this.loadPosts();
            console.log(this.$route.query.page);
        },
        watch:{
            '$route' (to, from){
                this.id = to.params.id
                this.loadPosts()
            }
        }
    }
</script>

<style scoped>

</style>