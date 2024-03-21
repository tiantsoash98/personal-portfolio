<template>
    <aside class="menu" aria-expanded="false">
        <div class="ellipse__field" data-field-y="0" data-position-x="-50" data-position-y="50" data-scale="1" data-z-index="1">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
        </div>
        <div class="menu__frame overlay"></div>
        <div class="menu__main-wrapper container pt-4 pt-md-8 pb-12">
            <div class="menu__header-wrapper">
                <div class="menu__close-wrapper cursor-pointer hover-animation menu-toogler">
                    <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation__wrapper--align-right hover-animation--to-top">
                        <div class="hover-animation__item hover-animation__item--main">Close</div>
                        <div class="hover-animation__item hover-animation__item--second">Close</div>
                    </div>
                </div>
            </div>
            <div class="menu__links mt-8 mb-8" role="list">
                <HeaderMenuLink to="/" title="Home" subtitle="Everything" class="menu-toogler"/>
                <HeaderMenuLink to="/#about" title="About" subtitle="Who I am" class="menu-toogler"/>
                <HeaderMenuLink to="/#works" title="Works" subtitle="Projects" class="menu-toogler"/>
                <HeaderMenuLink to="/#services" title="Services" subtitle="What I do" class="menu-toogler"/>
                <HeaderMenuLink to="/#contact" title="Contact" subtitle="Let's talk" class="menu-toogler"/>
            </div>
            <div class="menu__footer">
                <div class="menu__box menu__box--left">
                    <div class="menu__box-item menu__mail">Available for freelance work</div>
                </div>
                <div class="menu__box menu__box--center">
                    <a href="mailto:tiantsoa.sh@gmail.com" class="menu__box-item menu__mail">tiantsoa.sh@gmail.com</a>
                </div>
                
                <div class="menu__box menu__box--right">
                    <a class="menu__box-item" href="#">Linkedin</a>
                    <a class="menu__box-item ml-0 ml-md-8" href="#">Instagram</a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
const { initHeaderMenu, destroyHeaderMenu } = useHeaderMenu()

onMounted(() => {
    initHeaderMenu()
})

onUnmounted(() => {
    destroyHeaderMenu()
})
</script>

<style lang="scss">
.menu {
    display: none;
    $root:&;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: var(--z-index-menu);

    &__frame {
        background-color: var(--color-neutral-950);
        transform-origin: top center;
    }
    &__header-wrapper {
        align-self: flex-end;
    }
    &__main-wrapper{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    &__links {
        width: 100%;

        &:hover{
            & .menu-link__title {
                opacity: 0.4;
            }
        }
    }
    &__footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__box {
        flex: 1;
        
        &--center {
            text-align: center;
        }
        &--right {
            text-align: right;
        }   
    }
}

@media screen and (max-width: 767px) {
    .menu {
        &__footer {
            flex-direction: column;
            justify-content: flex-start;
        }
        &__box {
            &--center, &--right {
                text-align: left;
            }
        }
        &__box-item {
            display: block;
        }
    }
}
</style>