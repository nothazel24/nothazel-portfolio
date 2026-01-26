<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../data/project'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const route = useRoute()

const project = projects.find(
    p => p.slug === route.params.slug
)
</script>

<template>

    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <section class="project-detail my-12">

        <div class="body-wrapper container mx-auto px-48">
            <RouterLink to="/" class="my-9 inline-block text-sm text-slate-600 hover:underline">
                ← Kembali ke Home
            </RouterLink>
            
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
