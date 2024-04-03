<template>
    <nav class="header-web">
        <div class="header-web__main-wrapper">
            <div class="header-web__availability col-md-4 col-lg-5">
                <div class="header-web__hide-on-scroll">
                    Available for freelance work
                </div>
            </div>
            <div class="header-web__links-wrapper col-md-5 col-lg-4">
                <div class="header-web__link-wrapper header-web__hide-on-scroll">
                    <a :href="`${ config.public.baseUrl }/#about`" class="hover-animation">
                        <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                            <div class="hover-animation__item hover-animation__item--main">About</div>
                            <div class="hover-animation__item hover-animation__item--second">Who I am</div>
                        </div>
                    </a>
                </div>
                <div class="header-web__link-wrapper header-web__hide-on-scroll">
                    <a href="#works" class="hover-animation">
                        <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                            <div class="hover-animation__item hover-animation__item--main">Works</div>
                            <div class="hover-animation__item hover-animation__item--second">Projects</div>
                        </div>
                    </a>
                </div>
                <div class="header-web__link-wrapper header-web__hide-on-scroll">
                    <a href="#services" class="hover-animation">
                        <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                            <div class="hover-animation__item hover-animation__item--main">Services</div>
                            <div class="hover-animation__item hover-animation__item--second">What I do</div>
                        </div>
                    </a>
                </div>
                <div class="header-web__link-wrapper header-web__hide-on-scroll">
                    <a href="#contact" class="hover-animation">
                        <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation__wrapper--align-right hover-animation--to-top">
                            <div class="hover-animation__item hover-animation__item--main">Contact</div>
                            <div class="hover-animation__item hover-animation__item--second">Let's talk</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="header-web__menu-wrapper">
                <div class="header-web__menu header-web__show-on-scroll hover-animation menu-toogler">
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
const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.header-web{
    &__main-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(9, minmax(0, 1fr));
        grid-gap: var(--column-gap);
    }
    &__links-wrapper {
        display: flex;
        justify-content: flex-start;
    }
    &__link-wrapper {
        flex: 1;
    }
    &__menu-wrapper {
        position: absolute;
        right: 0;
        pointer-events: none;
    }
    &__menu {
        cursor: pointer;
        opacity: 0;
    }
}
</style>