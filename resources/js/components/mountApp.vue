<template>
    <div>
        <nav class="navbar navbar-dark bg-primary text-sm-center">
            <div class="mx-auto" >
                <a class="navbar-brand" href="#">App Facilita</a>
            </div>

            <ul class="navbar-nav navbar-expand mx-auto mt-2 mt-lg-0">
                <li class="nav-item p-2">
                    <router-link to="/" class="nav-link" >Problema 1</router-link>
                    <!-- <a class="nav-link" href="#">Problema 1</a> -->
                </li>
                <li class="nav-item p-2">
                    <router-link to="two" class="nav-link" >Problema 2</router-link>
                </li>
                <li class="nav-item p-2">
                    <router-link to="three" class="nav-link" >Problema 3</router-link>
                </li>
            </ul>
            <div class="mx-auto">
                <a class="navbar-brand d-none d-lg-block" href="#">Teste prático</a>
            </div>
        </nav>

        <div class="container mt-4">
            <vue-page-transition name="fade-in-left">
                <router-view />
            </vue-page-transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mount-app',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
