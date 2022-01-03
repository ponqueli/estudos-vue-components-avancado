<template>
  <div id="app" class="container">
    <h1>Forma padrão</h1>
      <PostsLista :posts="posts"/>
    <!-- distribuiçao ou projecao de conteudo SLOT-->

    <hr>

    <h2>Slots com escopo</h2>
    <PostsLista :posts="posts"
        v-slot="{ meuPost }">
        <!-- desestruturação { meuPost } -->
        <h2> {{ meuPost.titulo }}</h2>
        <p> {{ meuPost.conteudo }}</p>
        <small> {{ meuPost.autor }}</small>
      <!-- <h2 slot="cabecalho">Components no Vue</h2> -->
      
      <!-- todo esse trecho abaixo que não está em algum slot específico será colocado dentro do slot default no post.vue -->
      <!-- <p class='aplica-cor'></p>
      <span>...</span> -->
  
      <!-- <small slot="rodape">Por {{ autor }}</small> -->

      <!-- se eu nao tivesse o template abaixo iria colocar o texto padrao q eu decidi dentro do slot botão no component Post.vue -->
      <!-- vou deixar comentado abaixo, para utilizar o valor default (ler mais)-->
      <!-- <template slot="botao">Detalhes...</template> -->
    </PostsLista>
  </div>
</template>

<script>
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    PostsLista
  },
  data(){
    return{
       posts:[{
         id:1, titulo:"Components no Vue", conteudo:"Components são uma das peças mais importantes no Vue", autor: "Ponqueli"
       },{
         id:2, titulo:"Distribuindo conteúdo com slots", conteudo:"Slots podem ser usados como conteúdos de código HTML", autor: "Ponqueli"
       }]
    }
  }
}

</script>

<style scoped>
  .container {
    width: 960px;
    margin:auto
  }
  /* .aplica-cor{
    color:blueviolet
  } */
</style>