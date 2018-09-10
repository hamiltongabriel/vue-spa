<template>
    <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <router-view></router-view>
            </div>
        </section>
       <app-footer></app-footer>
    </div>
</template>
<script>
    import AppHeader from './AppHeader'
    import AppFooter from './AppFooter'
    export default {
        components: {
          'app-header': AppHeader,
          'app-footer': AppFooter
        }
    }
</script>
<style lang="scss">
    // definir cor padrao azul no site.
    $primary: #287ab1;
    @import "../../../node_modules/bulma";

    .columns{
        flex-wrap: wrap;
    }
</style>