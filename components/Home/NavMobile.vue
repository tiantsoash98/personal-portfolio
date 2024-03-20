<template>
    <nav class="header-mobile">
        <div class="header-mobile__main-wrapper">
            <div class="header-mobile__menu-wrapper">
                <div class="header-mobile__menu hover-animation">
                    <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation__wrapper--align-right hover-animation--to-top">
                        <div class="hover-animation__item hover-animation__item--main">Menu</div>
                        <div class="hover-animation__item hover-animation__item--second">Open</div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-mobile{
    &__main-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    &__menu {
        cursor: pointer;
    }
}
</style>