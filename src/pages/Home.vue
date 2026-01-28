<script setup>
import About from '../components/About.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Project from '../components/Project.vue';
import TechStack from '../components/TechStack.vue';

import { projects } from '../data/project';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'

const { locale } = useI18n()

const localizedProjects = computed(() =>
    projects.map(project => ({
        ...project,
        title: project.title[locale.value],
        description: project.description[locale.value]
    }))
)
</script>

<template>

    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <div class="body-wrapper container mx-auto px-10 md:px-48">
        <About />
        <hr class="border-t border-slate-950/40">

        <TechStack />
        <hr class="border-t border-slate-950/40">

        <section class="my-project my-12">
            <h2 class="text-2xl">
                {{ $t('project.title') }}
            </h2>
            <div class="list-project mt-7 flex flex-col gap-2">
                <Project v-for="project in localizedProjects" :key="project.slug" :project-title="project.title"
                    :slug="project.slug" />
            </div>
        </section>

        <hr class="border-t border-slate-950/40">
    </div>

    <Footer />

</template>

<style scoped></style>
