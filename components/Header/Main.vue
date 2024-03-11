<template>
    <header class="header pt-10">
        <div class="container">
            <div class="row">
                <div class="header__logo col-6 col-lg-3">Tiantsoa Rabemananjara</div>
                <div class="header__availability col-6 col-lg-3">Available for freelance work</div>
                <div class="header__links-wrapper col-12 col-lg-5 col-start-0 col-start-lg-8">
                    <div class="header__link-wrapper">
                        About
                    </div>
                    <div class="header__link-wrapper">
                        Projects
                    </div>
                    <div class="header__link-wrapper">
                        Playground
                    </div>
                    <div class="header__link-wrapper">
                        Contact
                    </div>  
                </div>
            </div>
            
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    &__links-wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__link-wrapper {
        overflow: hidden;
    }
}
</style>