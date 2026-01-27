<script setup>
import { useI18n } from 'vue-i18n'

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

            <ul class="flex gap-6 text-sm font-medium">
                <button @click="switchLang('id')">ID</button>
                <button @click="switchLang('en')">EN</button>
            </ul>

        </nav>
    </header>

</template>
