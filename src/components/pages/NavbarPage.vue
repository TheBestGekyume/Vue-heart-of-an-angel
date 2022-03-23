<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-purple-3">
        <div class="container">
            <!-- <a id="Home" class="navbar-brand fs-home" href="#"><img src="src\assets\img\logo_size.jpg" alt=""></a> -->
            <a id="Home" class="navbar-brand fs-home" href="#"><strong>Julia Maia</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> 
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5 mx-5">
                    <li class="nav-item pe-5 ps-5 mx-5"> <a  class="nav-link" href="#biografia">Biografia</a> </li>
                    <li class="nav-item pe-5 mx-5"> <a class="nav-link" href="#poesias">Poesias</a> </li>
                    <li class="nav-item mx-5"> <a class="nav-link" href="#footer">Contato</a> </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
#Home:hover{
    color: #fbff00 !important;
}

.nav-link:hover, .navbar-brand:hover{
    color:#c300ff !important;
}

.fs-home{
    font-size:26px;
}
</style>

