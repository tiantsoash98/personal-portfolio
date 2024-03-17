<template>
    <header class="header pt-8 blend-difference">
        <div class="container">
            <div class="row">
                <div class="header__logo col-3 col-md-3 col-lg-3">
                    <NuxtLink to="/">Tiantsoa Rabemananjara</NuxtLink>
                </div>
                <div class="header__availability col-3 col-md-3">
                    <div class="header__hide-on-scroll">
                        Available for freelance work
                    </div>
                </div>
                <div class="header__links-wrapper col-full col-md-6 col-lg-4 col-start-0 col-start-md-7 col-start-lg-9">
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/about" class="hover-animation">
                            <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                                <div class="hover-animation__item hover-animation__item--main">About</div>
                                <div class="hover-animation__item hover-animation__item--second">Who I am</div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/works" class="hover-animation">
                            <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                                <div class="hover-animation__item hover-animation__item--main">Works</div>
                                <div class="hover-animation__item hover-animation__item--second">Projects</div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/playground" class="hover-animation">
                            <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                                <div class="hover-animation__item hover-animation__item--main">Playground</div>
                                <div class="hover-animation__item hover-animation__item--second">Explorations</div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="header__link-wrapper header__hide-on-scroll">
                        <NuxtLink to="/contact" class="hover-animation">
                            <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation__wrapper--align-right hover-animation--to-top">
                                <div class="hover-animation__item hover-animation__item--main">Contact</div>
                                <div class="hover-animation__item hover-animation__item--second">Let's talk</div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="header__menu-wrapper">
                    <div class="header__menu hover-animation">
                        <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation__wrapper--align-right hover-animation--to-top">
                            <div class="hover-animation__item hover-animation__item--main">Menu</div>
                            <div class="hover-animation__item hover-animation__item--second">Open</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    onMounted(() => {
        useHeaderAnimateScroll()
    })
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    left: 0;
    right: 0;
    mix-blend-mode: difference;

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