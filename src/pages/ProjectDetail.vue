<script setup>
import { projects } from '../data/project'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { CircleArrowLeft } from 'lucide-vue-next'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

// ambil slug dari route
const route = useRoute()

const project = computed(() =>
    projects.find(p => p.slug === route.params.slug)
)

// i18n
const { locale } = useI18n()

const localizedTitle = computed(() =>
    project.value?.title?.[locale.value] || project.value?.title?.id
)

const localizedDescription = computed(() =>
    project.value?.description?.[locale.value] || project.value?.description?.id
)
</script>

<template>
    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <section v-if="project" class="project-detail my-12">
        <div class="body-wrapper container mx-auto px-10 md:px-48">

            <RouterLink to="/" class="my-9 flex items-center gap-3">
                <CircleArrowLeft color="#F26419" :size="25" />
                <p class="text-sm text-orange hover:underline">
                    {{ $t('common.back-to-home') }}
                </p>
            </RouterLink>

            <img :src="project.imgLink" alt="project-banner" class="w-full mb-8 rounded-md">

            <h1 class="text-3xl font-bold">
                {{ localizedTitle }}
            </h1>

            <p class="mt-4 text-slate-600">
                {{ localizedDescription }}
            </p>

        </div>
    </section>

    <section v-else class="container mx-auto px-10 md:px-48 my-20">
        <p class="text-slate-600">
            Project tidak ditemukan.
        </p>
    </section>

    <Footer />
</template>
