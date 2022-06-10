<template>

   <nav class="navbar navbar-expand-lg navbar-dark bg-purple-3">
        <div class="container">
            <router-link id="Home" class="navbar-brand" to="/"><h1 class="fw-bold">Julia Maia</h1></router-link>
        </div>
    </nav>

    <form class="container mt-5 fs-form "> <!-- onchange="poemaController.validRequired()" -->

    <div class= "cabin-font border-2 preto p-4 rounded-3">
        
        <div class="form-group mb-3">
            <label for="name" class="form-label">Nome do Poema</label>
            <input 
            name="title_poem"
            v-model="poema.title_poem" 
            type="text"
            id="title"
            class="form-control required"
            placeholder="Digite o título do poema"
            aria-describedby="helpId"
            />
            
            <span class="textErro" aria-describedby="helpId">digite o título do poema.</span>
        </div>

        <div class="form-group mb-3">
            <label for="image_poem" class="form-label">Imagem do Poema</label>
            <input type="file"
            class="form-control required"
            id="files"
            name="image"
            placeholder=""
            ref="files"
            aria-describedby="helpId"
            multiple
            @change="upload()"/>
            <span class="textErro">Insira uma imagem para representar o poema.</span>
        </div>

        <div class="form-group mb-3">
            <label for="date" class="form-label">Data</label>
            <input 
            name="date_poem" 
            v-model="poema.date_poem" 
            type="date" 
            class="form-control required" 
            id="date" 
            placeholder="dd/mm/aaaa"
            aria-describedby="helpId"/>
            <span class="textErro" aria-describedby="helpId">insira a data que o poema foi criado.</span>
        </div>

        <div class="form-group mb-3" >
            <label for="text" class="form-label">Poema</label>
            <textarea 
            name="text_poem"
            v-model="poema.text_poem" 
            type="text" 
            class="form-control required" 
            id="textP" 
            rows="10" 
            placeholder="Escreva o Poema aqui"
            aria-describedby="helpId"> 
            </textarea>
            <span class="textErro">escreva o conteudo do poema.</span>
        </div>

        <div class="form-group mb-3">
            <label for="name" class="form-label">Descrição do Poema</label>
            <input 
            name="descricao_poem"
            v-model="poema.descricao_poem" 
            type="text"
            id="descricap"
            class="form-control required"
            placeholder="Digite a descricao do poema"
            aria-describedby="helpId"
            />
            <span class="textErro" aria-describedby="helpId">digite a descrição do poema.</span>
        </div>

        <div class="form-group mb-3">
            <label for="name" class="form-label">Ativo</label>
            <input 
            name="ativo"
            v-model="poema.ativo" 
            type="number"
            id="ativo"
            class="form-control required"
            placeholder=" 1 = poema ativo                                               0 =  poema desativo"
            aria-describedby="helpId"
            />
            
            <span class="textErro" aria-describedby="helpId">digite o título do poema.</span>
        </div>

        <div class="mt-5">
            <button id="button_save" 
            type="button"
            class="button btn btn-dark btn-lg px-5" 
            @click="cadastrar()"
            > Salvar </button>
            <button id="button_cancel" type="button" class="button btn btn-dark btn-lg px-5 mx-3" ><router-link id="router-cancel" to="/">Cancelar</router-link></button>
            <button id="button_list" type="button" class="button btn btn-dark btn-lg px-5 mx-3" >Listar Poemas</button>
        </div>
        </div> 
    </form>

    <section class="container mt-5">
        <div class="row">
            <table id="listaPoemas" class=" table table-dark table-striped"></table>
        </div>
    </section>

    <!-- <form class="container mt-4 fs-form" onchange="poemaController.validRequired()">

        <div class= "cabin-font bg-purple-2 preto p-4 mt-5 rounded-3">
            <div class="form-group mb-3">
                <label for="name" class="form-label">Nome do Poema</label>
                <input type="text" class="form-control required" id="title" name="title" placeholder="Digite o título do poema">
                <span class="textErro">digite o título do poema.</span>
            </div>
    
            <div class="form-group mb-3">
                <label for="image" class="form-label">Imagem do Poema</label>
                <input type="file" class="form-control required" id="image" name="image" placeholder="">
                <span class="textErro">insira uma imagem para representar o poema.</span>
            </div>
    
            <div class="form-group mb-3">
                <label for="date" class="form-label">Data</label>
                <input type="date" class="form-control required" id="date" name="date" placeholder="dd/mm/aaaa">
                <span class="textErro">insira a data que o poema foi criado.</span>
            </div>
    
            <div class="form-group mb-3" >
                <label for="text" class="form-label">Poema</label>
                <textarea type="text" class="form-control required" id="textP" name="text" rows="10" placeholder="Escreva o Poema aqui"> </textarea>
                <span class="textErro">escreva o conteudo do poema.</span>
            </div>
    
            <div class="mt-5">
                <button id="button_save" type="button" class="button btn btn-dark btn-lg px-5" onclick="poemaController.addPoema()">Salvar</button>
                <button id="button_cancel" type="button" class="button btn btn-dark btn-lg px-5 mx-3" onclick="poemaController.excluir()">Cancelar</button>
                <button id="button_list" type="button" class="button btn btn-dark btn-lg px-5 mx-3" onclick="poemaController.getAllPoema()">Listar Poemas</button>
            </div>
            </div> 
        </form> -->

</template>

<script>
import { Poema } from "@/models/Poema"; //{} serve para pegar as classes com o nome defalt
import PoemaService from "@/services/poemaService";
//import router from "@/router";
var poema = new Poema();
export default {
  data() {
    return {
      poema,
    };
  },
  methods: {
    cadastrar() {
      PoemaService.add(this.poema)
        .then((res) => {
          console.log(res);
          alert("Poema Cadastrado!");
          this.poema = res;
          //router.push("/");
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao cadastrar o poema.");
        });
    },
    upload() {
      //Cria um novo data form (Dados do Formulario)
      let dataForm = new FormData();
      //Pega todos as referencias com o nome files
      for (let file of this.$refs.files.files) {
        dataForm.append("file", file);
      }
      //Adiciona a lista de objetos do formulario
      PoemaService.upload(dataForm)
        .then((res) => {
          console.log(res);
          this.poema.fotos = res.data.result;
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao alterar a foto.");
        });
    },
  },
};

</script>   

<style>

/* fonts link */
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

body{
    min-height: 100px;
}

form{
    background: #c9a2ff52;
    box-shadow: 0 8px 32px 0 #1f268748;
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 2px solid #ffe0e063;
}

table, th ,td{
    border:solid 2px #c8d14d !important;
    color: #dfdfdf;
}

th{
    color: #eeff00 !important;
}

i{
    color: #fbff00af;
}

i:hover{
    color: #fbff00ea;
}

input, textarea{
    background: linear-gradient(#111111,#353535) !important;

    border: #242424 !important;
    color: #ffffff !important;
}

.textErro{
    display: none;
    color: #920000;
    font-weight: bold;
    font-size: 20px;
}

/* CLASS */

.cabin-font{
    font-family:'Cabin', sans-serif;
}


.nav-link:hover, .navbar-brand:hover{
    color:#c300ff !important;
}

.button:hover{
    border-bottom:solid 1px #1a1a1a !important;
}

button{
    border-bottom:solid 5px #1a1a1a  !important;
}

.fs-form{
    font-size:26px;
}
#router-cancel{
    text-decoration:none ;
    color:white;
}
/* MOBILE */

@media screen and (max-width:991px){

    #button_cancel,#button_save, #button_list{
        margin:0px 10px 15px 0px !important;
        padding: 10px 15px !important;

    }

    .navbar-dark .navbar-toggler {
        color: #1a1524;
        border:#1a1524;
    }

    .navbar-dark .navbar-toggler:hover {
        color: #b638ff;
        border:#b638ff;
    }
}
</style>