<template>
    <div class="hero pb-12 pt-12">
        <div class="hero__ellipse-wrapper">
            <div class="ellipse-decor"></div>
        </div>
        <div class="hero__main-wrapper container">
            <div class="hero-spacer"></div>
            <div class="hero__content-wrapper row pt-20 pb-20">
                <div class="hero__headline-wrapper col-full col-lg-8">
                    <h1 class="text-visually-hidden">Web Designer & Creative Developer helping passionate people grow their business</h1>
                    <div class="title-h1">Web Designer & Creative Developer helping passionate people grow their business</div>
                </div>
                <div class="hero__button-wrapper col-full col-lg-4">
                    <ButtonMain 
                        :text="'Explore my work'" 
                        :hasIcon="true"
                        icon="IconArrowDown"
                        animate-direction="to-bottom"
                    />
                </div>
            </div>
            <div class="hero__footer row">
                <div class="hero__footer-item col-3 col-lg-3"> 
                    <IconArrowDown class="hero__arrow"/>
                </div>
                <div class="hero__footer-item col-full col-md-6 col-lg-6">
                    <ul class="hero__socials-wrapper">
                        <li class="hero__social"><a class="hover-link" href="#">Email</a></li>
                        <li class="hero__social ml-8"><a class="hover-link" href="#">Linkedin</a></li>
                        <li class="hero__social ml-8"><a class="hover-link" href="#">Instagram</a></li>
                    </ul>
                </div>
                <div class="hero__footer-item hero__timezone col-full col-md-6 col-lg-3">
                    <span>Local time {{ localTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const localTime = useLocalTimeState()
</script>

<style lang="scss" scoped>
.hero {
    height: 100vh;

    &__ellipse-wrapper {
        position: absolute;
        top: 50%;
        left: 0%;
        width: 100%;
        height: min(100vh, 100vw);
    }
    &__main-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__button-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    &__footer-item {
        align-self: end;
    }
    &__socials-wrapper {
        width: 100%;
        display: flex;
    }
    &__timezone {
        text-align: right;
    }
    &__arrow {
        width: 4rem;
    }
}
</style>