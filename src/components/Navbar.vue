<script setup>
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next';

const { locale } = useI18n()

const switchLang = (lang) => {
    locale.value = lang
}
</script>

<template>

    <header class="bg-base sticky top-0 z-50">
        <nav class="container mx-auto px-5 md:px-36 py-6 flex items-center justify-between">

            <!-- Logo -->
            <RouterLink to="/">
                <p class="group relative inline-block text-2xl font-bold">
                    --ryan-F
                    <!-- wrapper -->
                    <span class="inline-block -translate-x-1 -mr-3 -rotate-12 origin-bottom">
                        <!-- animate section -->
                        <span class="inline-block text-orange group-hover:animate-bounce-e">
                            e
                        </span>
                    </span>

                    rdian.
                </p>

            </RouterLink>

            <div class="flex flex-row gap-5">
                <Languages :size="20" />
                <ul class="flex gap-3 font-medium">
                    <button @click="switchLang('id')"
                        class="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-150 hover:after:scale-x-100 md:px-1">ID</button>
                    <p>|</p>
                    <button @click="switchLang('en')"
                        class="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-150 hover:after:scale-x-100 md:px-1">EN</button>
                </ul>
            </div>

        </nav>
    </header>

</template>
