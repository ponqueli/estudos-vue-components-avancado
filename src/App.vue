<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>
    <!-- distribuiçao ou projecao de conteudo SLOT-->
    <Post>
      <h2 slot="cabecalho">Components no Vue</h2>
      
      <!-- todo esse trecho abaixo que não está em algum slot específico será colocado dentro do slot default no post.vue -->
      <p class='aplica-cor'>Components são uma das peças mais importantes no Vue</p>
      <span>...</span>
  
      <small slot="rodape">Por {{ autor }}</small>

      <!-- se eu nao tivesse o template abaixo iria colocar o texto padrao q eu decidi dentro do slot botão no component Post.vue -->
      <!-- vou deixar comentado abaixo, para utilizar o valor default (ler mais)-->
      <!-- <template slot="botao">Detalhes...</template> -->
    </Post>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  components: {
    Post
  },
  data(){
    return{
      autor:" Ponqueli "
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