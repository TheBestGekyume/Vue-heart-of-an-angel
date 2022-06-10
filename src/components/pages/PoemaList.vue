<template>
<section id="poesias" class="container mt-4">
    <div class="row cabin-font mb-4 text-center">
     
      <!-- CARD -->

      <div class="mb-4 col-md-4 col-12" v-for="poema of poemas" :key="poema.id">
        <a
          href=""
          data-bs-toggle="modal"
          data-bs-target="#modal"
          @click="selectPoema(poema)"
        >
          <div class="card preto">
            <div class="mt-3 my-1">
              <h3 class="fs-card">{{ poema.title_poem }}</h3>
            </div>
            <img :src="poema.image_poem" class="img-fluid" /> 
            <p class="mb-0 mt-1">{{ poema.descricao_poem }}</p>
          </div>
        </a>
      </div>
    </div>

  <!--MODAL-->

  <div
    class="modal"
    id="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content text-center">
        <div class="modal_header bg-purple container">
          <div class="row">
            <div class="col-2"></div>
            <h2 class="col-8 Modal_title" id="">
              {{ poemaSelected.title_poem }}
            </h2>
            <button
              type="button"
              class="btn-close ps-5 col-2"
              data-bs-dismiss="modal"
            ></button>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
        </div>
        <div class="modal-body">
          <p class="">{{ poemaSelected.text_poem }}</p>
        </div>
        <div class="modal_footer pe-2 pt-3">
          <p class="text-end">{{ poemaSelected.date_poem }}</p>
          <p>{{ poemaSelected.descricao_poem }}</p>
        </div>
      </div>
    </div>
  </div>

  
  </section>
</template>

<script>
// import { Poema } from "@/models/Poema";
import PoemaService from "@/services/poemaService.js";
import { configure } from "@/services/config";

var poemas = []

//{     id: 0,
//     title_poem: "Poema teste",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//     date_poem: "11/02/2021"
//   },
//   {
//     id: 1,
//     title_poem: "Poema teste2",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//   },
//   {
//     id: 3,
//     title_poem: "Poema teste",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//   },
//   {
//     id: 4,
//     title_poem: "Poema teste",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//   },
//   {
//     id: 5,
//     title_poem: "Poema teste",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//   },
//   {
//     id: 6,
//     title_poem: "Poema teste",
//     image_poem: "/img/borboleta_teste.jpg",
//     text_poem: "POEMAAAAAA",
//     descricao_poem: "OK",
//   },
// ];
  

var poemaSelected = {};

export default {
  components: {},
  data() {
    return {
      poemas,
      poemaSelected,
    };
  },
  mounted() {
    this.listPoemas();
  },
  methods: {
    listPoemas() {
      PoemaService.list()
        .then((res) => {
          console.log(res);
          this.poemas = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectPoema(poema) {
      this.poemaSelected = poema;
    },
    showImage(image) {
      return configure.localHost + "/midias/poemas" + image;
    },
  },
};
</script>

<style>
.card{
    background: #d62a2a1a!important;
    box-shadow: 0 8px 32px 0 #1f268748!important;
    backdrop-filter: blur( 20px )!important;
    -webkit-backdrop-filter: blur( 20px )!important;
    border-radius: 10px!important;
    border: 1px solid #fffc3d4d!important;
    border: 1px solid #ffe0e063!important;
}
.card:hover{
    background: #9013fe50!important;
    box-shadow: 0 8px 32px 0 #1f268794!important;
    backdrop-filter: blur( 20px )!important;
    -webkit-backdrop-filter: blur( 20px )!important;
    border-radius: 10px!important;
    border: 0px solid #fffc3d67!important;
}
.fs-card{
    font-size:32px;
}

/* i{
    color: white;
    font-size: 30px;
    padding:0px 0px 0px 30px ;
    margin-top:22px;

} */
a{
    text-decoration: none;
}

p{
    border: 0;
}

.modal_header{  
    text-align: center !important;
    display: inline !important;
    flex-shrink: 0;
    align-items: center;
    padding: 1rem 1rem;
    border-bottom: 1px solid #999999;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
    background-color: #2b2b2b;
}

.modal-body, .modal_footer{
    background-color: #222222 !important;
    color: #e0e0e0;
}
.modal_footer{
    border-color: white;
    border-top: solid 1px;
}

.Modal_title{
    color: white !important;
}

img{
  max-height: 200px;
  max-width:400px;
}

@media screen and (max-width:991px){
    .fs-card{
        font-size:24px;
    };

}
</style>