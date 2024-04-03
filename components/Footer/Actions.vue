<template>
    <div class="footer mt-20 mt-md-60 pb-8">
        <div class="container">
            <div class="row">       
                <div class="footer__left col-full col-md-4"> 
                    <a href="mailto:tiantsoa.sh@gmail.com" target="_blank">tiantsoa.sh@gmail.com</a>
                </div>
                <div class="footer__middle col-full col-md-4">
                    <ul class="footer__socials-wrapper">
                        <li class="footer__social"><a href="https://www.linkedin.com/in/tiantsoa-rabemananjara-254655152/" target="_blank">Linkedin</a></li>
                        <li class="footer__social ml-8"><a href="https://www.instagram.com/tiantsoa_sh/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
                <div class="footer__right col-full col-md-4">
                    <a href="#top">
                        <div class="cursor-pointer hover-animation">
                            <div class="hover-animation__wrapper hover-animation__wrapper--text hover-animation--to-top">
                                <div class="hover-animation__item hover-animation__item--main">Back to top</div>
                                <div class="hover-animation__item hover-animation__item--second">Back to top</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    &__socials-wrapper {
        display: flex;
    }
    &__middle {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
    } 
    &__right {
        text-align: right;
        align-self: flex-end;
    }
}

@media screen and (max-width: 991px) {
    .footer{
        &__left {
            text-align: center;
        } 
        &__right {
            text-align: center;
            align-self: flex-end;
        }
    }
}
</style>