<template>
    <div class="hero pb-12 pt-12">
        <div class="ellipse__field animate__ellipse-in" data-field-y="50" data-field-mobile-y="40"  data-position-x="0" data-position-y="0" data-position-mobile-x="60"  data-scale="1">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
        <div class="hero__main-wrapper container">
            <div class="hero-spacer"></div>
            <div class="hero__content-wrapper row pt-20 pb-20">
                <div class="hero__headline-wrapper col-full col-md-8">
                    <h1 class="text-visually-hidden">Web Designer & Creative Developer helping passionate people grow their business</h1>
                    <div class="title-h1 split-type animate__title-in">Web Designer & Creative Developer helping passionate people grow their business</div>
                </div>
                <div class="hero__button-wrapper col-full col-md-4 mt-8 mt-md-0">
                    <NuxtLink to="/#works">
                        <ButtonMain 
                            :text="'Explore my work'" 
                            :hasIcon="true"
                            icon="IconArrowDown"
                            animate-direction="to-bottom"
                        />
                    </NuxtLink>
                </div>
            </div>
            <div class="hero__footer row">
                <div class="hero__footer-item hero__footer-arrow col-1 col-md-3 order-2 order-md-1 mt-6 mt-md-0"> 
                    <IconArrowDown class="hero__arrow"/>
                </div>
                <div class="hero__footer-item col-5 col-md-5 col-lg-6 order-1 order-md-2">
                    <ul class="hero__socials-wrapper">
                        <li class="hero__social"><a class="hover-link" href="mailto:tiantsoa.sh@gmail.com" target="_blank">Email</a></li>
                        <li class="hero__social ml-0 ml-md-8"><a class="hover-link" href="https://www.linkedin.com/in/tiantsoa-rabemananjara-254655152/" target="_blank">Linkedin</a></li>
                        <li class="hero__social ml-0 ml-md-8"><a class="hover-link" href="https://www.instagram.com/tiantsoa_sh/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
                <div class="hero__footer-item hero__timezone hide-on-below-md col-full col-md-4 col-lg-3 order-3">
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
    height: 100dvh;
    
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
        width: var(--title-h1);
    }
}

@media screen and (max-width: 991px) {
    .hero{
        &__footer-arrow {
            text-align: right;
        }
        &__button-wrapper {
            justify-content: flex-start;
        }
        &__socials-wrapper {
            flex-direction: column;
        }
    }
}
</style>