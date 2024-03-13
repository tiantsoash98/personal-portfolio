<template>
    <footer class="footer pt-64">
        <FooterCTA/>
        <FooterActions/>
        <div class="footer__ellipse-wrapper">
            <div class="ellipse-decor"></div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    overflow: hidden;
    
    &__ellipse-wrapper {
        position: absolute;
        bottom: 0%;
        left: 0%;
        z-index: -1;
        width: 100%;
        height: min(140vh, 100vw);
        transform: translateY(50%);
    }
}
</style>