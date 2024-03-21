<template>
    <div class="footer mt-60 pb-8">
        <div class="container">
            <div class="row">       
                <div class="footer__left col-full col-md-4"> 
                    <a href="mailto:tiantsoa.sh@gmail.com" target="_blank">tiantsoa.sh@gmail.com</a>
                </div>
                <div class="footer__middle col-full col-md-4">
                    <ul class="footer__socials-wrapper">
                        <li class="footer__social ml-8"><a class="hover-link" href="#">Linkedin</a></li>
                        <li class="footer__social ml-8"><a class="hover-link" href="#">Instagram</a></li>
                    </ul>
                </div>
                <div class="footer__right col-full col-md-4">
                    <span>Back to top</span>
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
</style>