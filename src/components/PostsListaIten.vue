<template>
    <div class="post">
        <div class="post-cabecalho">
            <h2 name="cabecalho">{{ post.titulo }}</h2>
        </div>
        <div class="post-conteudo">
            <p> {{ post.conteudo }} </p>
        </div>
        <div class="post-rodape">
            <small name="rodape">{{ post.autor }}</small>
            <a href="#" class='link'>Ler mais...</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .post{
        margin: 15px auto;
    }

    .post-cabecalho{
        padding: 5px 12px;
        background-color: #eee;
    }

    .post-conteudo{
        font-size: 16px;
    }

    .post-rodape{
        font-style: italic;
    }

    .link{
        float: right;
    }
    .aplica-cor{
        color: crimson;
    }
</style>