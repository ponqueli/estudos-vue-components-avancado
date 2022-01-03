<template>
    <div>
        <h2>Lista de Posts</h2>
        <PostListaIten 
            v-for="post in posts"
            :key="post.id"
            :post="post">
                <slot :meuPost="post"></slot> <!-- passagem da prop para o slot-->
        </PostListaIten>
    </div>
</template>

<script>

import PostListaIten from './PostsListaIten.vue'

export default {
    props:{
        posts:{
            type: Array,
            required: true
        }
    },
    components:{
        PostListaIten
    }
}
</script>