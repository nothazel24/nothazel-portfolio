<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../data/project'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { CircleArrowLeft } from 'lucide-vue-next';

const route = useRoute()

const project = projects.find(
    p => p.slug === route.params.slug
)

defineProps({
    imgLink: String,
})
</script>

<template>

    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <section class="project-detail my-12">

        <div class="body-wrapper container mx-auto px-10 md:px-48">
            <RouterLink to="/" class="my-9 flex flex-row items-center gap-3">
                <CircleArrowLeft color="#F26419" :size="25" />
                <p class="text-sm text-orange hover:underline">Kembali ke Beranda</p>
            </RouterLink>

            <img :src="project.imgLink" alt="project-banner" class="w-full mb-8 rounded-md">

            <h1 class="text-3xl font-bold">
                {{ project?.title }}
            </h1>

            <p class="mt-4 text-slate-600">
                {{ project?.description }}
            </p>
        </div>
    </section>

    <Footer />
</template>
