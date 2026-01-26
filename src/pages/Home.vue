<script setup>
import About from '../components/About.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Project from '../components/Project.vue';
import TechStack from '../components/TechStack.vue';

import { projects } from '../data/project';
</script>

<template>

    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <div class="body-wrapper container mx-auto px-48">
        <About />
        <hr class="border-t border-slate-950/40">

        <TechStack />
        <hr class="border-t border-slate-950/40">

        <section class="my-project my-12">
            <h2 class="text-2xl">
                Project yang saya kerjakan
            </h2>
            <div class="list-project mt-7 flex flex-col gap-2">
                <Project v-for="project in projects" :key="project.slug" :project-title="project.title"
                    :slug="project.slug" />
            </div>
        </section>

        <hr class="border-t border-slate-950/40">
    </div>

    <Footer />

</template>

<style scoped></style>
