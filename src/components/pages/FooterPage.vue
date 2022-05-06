<template>
  <section class="cotainer mt-5 p-3 bg-yellow">  
        <div class="row">
            <div class="col-3 col-md-5"></div>
            <div class="col-6 col-md-2"> 
                <img class="img-fluid rounded-circle mx-auto d-block" src="@/assets/img/footer_image.jpg" alt="">
            </div>
        </div>
    </section>  

    <footer id="footer" class="container-fluid bg-purple-4">
        <div class="row">
            <div class="col-3 col-md-5"></div>
            <div class="col-7 col-md-5 py-1">
                <a class="text-decoration-none " href="https://www.instagram.com/juuux_maia/" target="blank">  
                    <i class="bi bi-instagram"> JUUUX</i> 
                </a>
            </div>
            <div class="col"></div>
            <!-- <div class="col-4 col-md-2 mt-5">
                <h6 class="text-end">Vitor</h6>
            </div> -->
        </div>
    </footer> 
</template>

<script>
export default {};
</script>

<style scoped>
i{
    font-size: 50px ;
    color: #000000a9;
}

i:hover{
    color: #fbff00a1;
}

@media screen and (max-width:991px){
    i{
    font-size: 40px ;
    color: #000000a9;
    }
}
</style>
