<template>
    <section class="section work-process">
        <div class="container">
            <div class="border-item"></div>
            <div class="work-process__header-wrapper row mt-16">
                <h3 class="work-process__label col-full col-md-6 paragraph-text">My work process</h3>
                <p class="work-process__label col-full col-md-6 title-h3">A clear process is the key to successful projects. These five steps are what I closely follow to create high-quality products.</p>
            </div>
            <div class="ellipse__field" data-field-y="20" data-position-x="65" data-scale="1">
                <div class="ellipse__wrapper">
                    <div class="ellipse__decor"></div>
                </div>
            </div>
            <div class="work-process__items-wrapper row mt-20 mt-md-40" role="list">  
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'01'"
                    title="Discovery"
                    description="The first step is getting to know you, understand your vision and your values. This will help identify the core challenges to solve for a high-performing website"
                    class="col-full col-sm-6 col-lg-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'02'"
                    title="Strategy"
                    description="I take what I have learned about you and start making competitive analysis. Then, I start building the informational architecture and the low-fidelity wireframes along with design style exploration."
                    class="col-full col-sm-6 col-lg-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'03'"
                    title="Design"
                    description="Once the foundation is set, I create the aesthetically pleasing and user-friendly website in the form of high-fidelity wireframes. I use Figma for my designs."
                    class="col-full col-sm-6 col-lg-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'04'"
                    title="Development"
                    description="Time to turn things into a real website. I make sure that everything is optimized to follow modern web practices and security. I pay very close attention to macro and micro-interactions."
                    class="col-full col-sm-6 col-lg-4"
                />
                <HomeWorkProcessItem
                    role="listitem" 
                    :index="'05'"
                    title="Delivery"
                    description="After everything has been completed, it’s time to launch the website. I will provide video tutorials or workshop explaining how to maintain the website and add content so you can do it yourself."
                    class="col-full col-sm-6 col-lg-4"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.work-process{
    &__items-wrapper {
        row-gap: var(--spacing-20);
    }
}
</style>