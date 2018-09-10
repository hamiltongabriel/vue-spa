<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/category/desktop" exact>
                <img src="http://bit.ly/vue-img" alt="Vue SPA">
            </router-link>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/category/desktop" >Inicio Desktop</router-link>
                    <router-link class="navbar-item" :to="{ name: 'category', params: { id: 'mobile'}}" >Início Mobile</router-link>
                    <router-link class="navbar-item" to="/login">Login</router-link>
                </div>
                </div>
            </div>
    </nav>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>

</style>