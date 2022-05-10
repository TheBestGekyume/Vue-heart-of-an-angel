<template>
<section id="poesias" class="container mt-4">

<div class="row cabin-font mb-4 text-center"> 
<!-- CARD -->
    <div class="mb-4 col-md-4 col-12 " v-for="poema of poemas" :key="poema.id">
        <a href=""  data-bs-toggle="modal" data-bs-target="#Modal-1">
            <div class="card preto">
                <div class="mt-3 my-1">
                    <h3 class="fs-card "> {{ poema.title_poem }} </h3>
                </div>
                <img src="https://picsum.photos/400/200" class="">
                <p class="mb-0 mt-1 "> {{poema.descricao_poem}} </p>
            </div>
        </a>
    </div>

<!--MODAL-->
    <div class="modal" id="Modal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
     v-for="poema of poemas" :key="poema.id"> 
        <div class="modal-dialog text-center">
            <div class="modal-content text-center">
                <div class="modal_header bg-purple container">
                   <div class="row">
                        <div class="col-2"></div>
                        <h2 class="text-center col-8 Modal_title" id="">{{poema.title_poem}}</h2>
                        <button type="button" class="btn-close ps-5 col-2" data-bs-dismiss="modal"></button> 
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                </div>
                <div class="modal-body"> {{poema.text_poem}} </div>
                <div class="modal_footer pe-2 pt-3"> 
                    <p class="text-end"> {{poema.date_poem}} </p>
                    <p> {{poem.descricao_poem}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

</template>

<script>
// import { Poema } from "@/models/Poema";
import PoemaService from "@/services/poemaService.js";
// import { configure } from "@/services/config";
// var monkPoema = [
//   {
//     name: "Celular",
//     descricao: "Celular 4g",
//   },
//   {
//     name: "Celular2",
//     descricao: "Celular 5g",
//   },
// ];

var poemas = [{
    title_poem: "Poema teste",
    image_poem: "@/assets/img/borboleta.jpg",
    text_poem: "POEMAAAAAA"
    
}];

export default {
    components:{
    },
    data() {
        return {
            poemas
            };
    },
    mounted() {
    // this.listarPoemas();
  },
  methods: {
    listarPoemas() {
      PoemaService.list()
        .then((res) => {
          console.log(res);
          this.Poemas = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>

</style>