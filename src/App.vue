<template>
  <div id="app" class="container">
    <h1>Componentes Dinâmicos</h1>
    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assíncrono</button>
    <button @click="componentSelecionado = 'Contato'">Contato</button>
    
    <!--:max="2" mantem 2 instâncias. Se tiver 3 destroi a que usou menos-->
    <keep-alive :include="/Home|Sobre/">
      <component 
          :is="componentSelecionado"
          v-bind="propsAtuais">
      </component>
    </keep-alive>

  </div>
</template>

<script>
import PostsLista from './components/PostsLista.vue'
import Home from './components/Home.vue'
import Sobre from './components/Sobre.vue'

const Contato = {
  render: h =>h({
    name:"ContatoDados",
    template: '<h2>Componente anônimo</h2>'
  })
}

export default {
  components:{
    Assincrono: () => ({
      component: new Promise((resolve) => {
        setTimeout(() => {
          resolve(import('./components/Assincrono.vue'))  
        }, 2000);
      }),
      loading:{ template:'<p>Carregando...</p>'},
      error: {template:' <p> Erro ao carregar component </p>'},
      delay: 200,
      timeout: 3000
    }),
    Contato,
    Home,
    Sobre,
    PostsLista
  },
  data(){
    return{
      componentSelecionado:'Home',
      posts:[{
        id:1, titulo:"Components no Vue", conteudo:"Components são uma das peças mais importantes no Vue", autor: "Ponqueli"
      },{
        id:2, titulo:"Distribuindo conteúdo com slots", conteudo:"Slots podem ser usados como conteúdos de código HTML", autor: "Ponqueli"
      }]
    }
  },
  computed: {
    propsAtuais(){
      return this.componentSelecionado ==='PostsLista'
        ? { posts: this.posts }
        : {}
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