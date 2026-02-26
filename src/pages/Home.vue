<script setup>
import About from '../components/About.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Project from '../components/Project.vue';
import TechStack from '../components/TechStack.vue';

// fetch data (from supabase)
import { supabase } from '../lib/supabase'
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// define data variables
const projects = ref([])
const { locale } = useI18n()

// fetching data project dari supabase
const fetchProjects = async () => {
    const { data, error } = await supabase
        .from('project_translations')
        .select(`
                project_name,
                subtitle,
                description,
                locale,
                projects (
                    slug
                )
            `)
        .eq('locale', locale.value)

    if (error) {
        console.log(error)
    } else {
        projects.value = data
    }

    // console.log(data)
    // console.log(error)
}

// mount data
onMounted(fetchProjects)

// saat ganti bahasa, langsung re-fetching data 
watch(locale, fetchProjects)
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

            <!-- List project section -->
            <div class="list-project mt-7 flex flex-col gap-2">

                <!-- Ambil data dari hasil fetch js dari supabase -->
                <Project v-for="project in projects" :key="project.projects.slug" :project-title="project.project_name"
                    :slug="project.projects.slug" :thumbnail="project.projects.thumbnail" />
            </div>

        </section>

        <hr class="border-t border-slate-950/40">
    </div>

    <Footer />

</template>

<style scoped></style>
