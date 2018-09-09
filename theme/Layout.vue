<template>
    <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <category></category>
            </div>
        </section>
       <app-footer></app-footer>
    </div>
</template>
<script>
    import AppHeader from './AppHeader'
    import AppFooter from './AppFooter'
    import Category from './Category'
    export default {
        components: {
          'app-header': AppHeader,
          'app-footer': AppFooter,
          'category': Category
        }
    }
</script>
<style lang="scss">
    // definir cor padrao azul no site.
    $primary: #287ab1;
    @import "~bulma";

    .columns{
        flex-wrap: wrap;
    }
</style>