<script setup>
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next';

const { locale } = useI18n()

const switchLang = (lang) => {
    locale.value = lang
}
</script>

<template>

    <header class="bg-transparent top-0 z-50">
        <nav class="container mx-auto px-5 md:px-36 py-6 flex items-center justify-between">

            <!-- Logo / Brand -->
            <div class="text-lg font-bold">
                <img src="../assets/logo/logo.svg" alt="Logo" width="140">
            </div>

            <div class="flex flex-row gap-5">
                <Languages :size="20" />
                <ul class="flex gap-3 font-medium">
                    <button @click="switchLang('id')">ID</button>
                    <p>|</p>
                    <button @click="switchLang('en')">EN</button>
                </ul>
            </div>

        </nav>
    </header>

</template>
