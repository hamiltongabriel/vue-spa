<template>
    <div class="content">
        <h2>Login</h2>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Usuário</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input"
                        placeholder="Seu Usuário"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Senha</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="password"
                        placeholder="Sua Senha">
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>