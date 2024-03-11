<template>
    <div>
        <div class="hero h-[calc(100vh-6rem)] py-12">
            <div class="container h-full flex flex-col justify-between">
                <div class="hero-spacer"></div>
                <div class="hero-content-wrapper theme-grid">
                    <div class="col-span-12 lg:col-span-8">
                        <h1 class="text-4xl">Web Designer & Creative Developer helping passionate people grow their businesses</h1>
                    </div>
                    <div class="col-span-12 lg:col-span-4 text-right">
                        <Button :text="'Explore my work'"></Button>
                    </div>
                </div>
                <div class="hero-footer theme-grid">
                    <div class="col-span-6 lg:col-span-6">

                    </div>
                    <div class="col-span-12 lg:col-span-3">
                        <ul class="w-full flex">
                            <li class="uppercase"><a href="hover-link">Email</a></li>
                            <li class="uppercase ml-8"><a href="hover-link">Linkedin</a></li>
                            <li class="uppercase ml-8"><a href="hover-link">Instagram</a></li>
                        </ul>
                    </div>
                    <div class="col-span-12 lg:col-span-3 text-right">
                        <span>My local time 13:42 (GMT+3)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>