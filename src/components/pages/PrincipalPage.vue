<template>
  <main>
    
    <NavbarPage />

    <section class="container">
        <!-- <div class="row"> -->
            <div id="biografia" class="cabin-font bg-purple-2 preto p-4 mt-5 rounded-3">
                <h1>Apresentação</h1>
                <h4>Prazer te ver por aqui, seja bem-vinde!!! Vou te contar um pouco sobre mim!
Eu me chamo Julia, tenho 16 anos, estudo muito, e faço parte de um grêmio estudantil, hoje minha vida está muito 
diferente do que imaginei do que ela se tornaria, eu já vivi muitos momentos complicados, a ansiedade, o suicido e o toc, 
caminharam comigo durante o meu amadurecimento, e eu tenho sido forte pra continuar! Hoje eu estou melhorando, mas uma das
coisas que mais me trouxeram vida quando eu estava perdida, foram as poesias, no meio do caos da minha mente,
a necessidade de escrever foi se tornando um dos motivos para eu viver! E quero que conheçam um pouco mais de mim,
lendo o que escrevo, essas poesias, são muito mais do que qualquer biografia que eu pudesse fazer,
não espero que se identifique, pois geralmente isso não será bom, mas caso sim, que isso te conforte,
seja bem-vinde ao meu mundinho❤️
                </h4>
            </div>
        <!-- </div> -->
    </section>

    


    <CardPage />

    <section class="cotainer mt-5 p-3 bg-yellow">  
        <div class="row">
            <div class="col-4 col-md-5"></div>
            <div class="col-4 col-md-2"> 
                <img class="img-fluid rounded-circle mx-auto d-block" src="../../assets/img/footer_image.jpg" alt="">
            </div>
        </div>
    </section>  

    <footer id="footer" class="container-fluid bg-purple-4">
        <div class="row">
            <div class="col-2 col-md-5"></div>
            <div class="col-9 col-md-4">
                <a class="text-decoration-none p-2" href="https://www.instagram.com/juuux_maia/" target="blank">  
                    <i class="bi bi-instagram"> JUUUX</i> 
                </a>
            </div>
            <div class="col"></div>
            <!-- <div class="col-4 col-md-2 mt-5">
                <h6 class="text-end">Vitor</h6>
            </div> -->
        </div>
    </footer> 
</main>
</template>

<script>
import NavbarPage from "./NavbarPage.vue";
import CardPage from "./CardPage.vue";
export default {
    components: {
        NavbarPage,
        CardPage,
  },
};
</script>

<style scoped>



#biografia{
    background: #c9a2ff2c;
    box-shadow: 0 8px 32px 0 #6868688f;
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border: 2px solid #b364af48!important;
    border: 2px solid #92255888!important;
    border: 2px solid transparent!important;
    /* border-image: linear-gradient(to bottom , #d7017079 ,#734f9573,#0038a777) !important */
    border-image: linear-gradient(to bottom right , #e9000075 ,#f77b0075,#f7f70075,#00753e75,#3e3ff675,#9b01ba75) !important  ;
    
    border-image-slice:1 !important ;
}

i{
    font-size: 50px ;
    color: #000000a9;
}

i:hover{
    color: #fbff00a1;
}

/* CLASS */




/* @media (min-width: 768px) and (max-width: 991px{

    .fs-card{
        font-size:22px;
    } */

</style>
