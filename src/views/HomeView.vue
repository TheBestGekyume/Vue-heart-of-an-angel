<template>
  <main class="home">
    <NavbarPage/>
    <HeaderPage/>
    <!-- <CardPage/> -->
    <PoemaList/>
    <FooterPage/>
</main>
</template>

<script>
import NavbarPage from "@/components/pages/NavbarPage.vue";
// import CardPage from "@/components/pages/CardPage.vue";
import HeaderPage from "@/components/pages/HeaderPage.vue";
import FooterPage from "@/components/pages/FooterPage.vue";
import PoemaList from "@/components/pages/PoemaList.vue";

export default {
    components: {
        NavbarPage,
        // CardPage,
        HeaderPage,
        FooterPage,
        PoemaList
  },
};
</script>

<style scoped>

@media screen and (min-width: 768px) {

    .fs-card{
        font-size:2px;
    };

};

@media screen and (max-width:991px){

    .fs-card{
        font-size:22px;
    }

    .px-5{
        padding:0 !important;
        margin:0 !important;
    }

    .pe-5{
        padding:0 !important;
    }

    .mx-5{
        margin:0 !important;
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