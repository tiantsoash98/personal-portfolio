<template>
    <footer class="footer pt-40" id="contact">
        <FooterCTA/>
        <FooterActions/>
        <div class="ellipse__field" data-field-y="0" data-position-y="0" data-scale="1">
            <div class="ellipse__wrapper">
                <div class="ellipse__decor"></div>
            </div>
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
        height: min(130vh, 100vw);
        transform: translateY(50%);
    }
}
</style>