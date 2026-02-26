<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { CircleArrowLeft } from 'lucide-vue-next'

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { supabase } from '../lib/supabase'

// define variables
const route = useRoute()
const { locale } = useI18n()

const project = ref(null)
const loading = ref(true)

// fetching data dari supabase
const fetchProject = async () => {
    loading.value = true
    project.value = null // reset state sebelum fetching

    const { data, error } = await supabase
        .from('project_translations')
        .select(`
        project_name,
        subtitle,
        description,
        projects!inner (
            slug,
            thumbnail
        )
    `)
        .eq('locale', locale.value)
        .eq('projects.slug', route.params.slug)
        .single()

    // PEMBATAS TUGAS

    /*
        NOTES: !inner digunakan untuk mengambil baris yang 
        benar-benar match/cocok dengan relasi slug 
    */

    if (error) {
        console.log(error)
        project.value = null
    } else {
        project.value = data
    }

    loading.value = false

    // console.log(data)
    // console.log(error)
}

// mount data
onMounted(fetchProject)

// saat ganti bahasa, langsung re-fetching data 
watch(locale, fetchProject)
</script>

<template>
    <div class="bg-orange w-full py-1"></div>
    <Navbar />

    <div class="body-wrapper container mx-auto px-10 md:px-48">

        <RouterLink to="/" class="my-9 flex items-center gap-3">
            <CircleArrowLeft color="#F26419" :size="25" />
            <p class="text-sm text-orange hover:underline">
                {{ $t('common.back-to-home') }}
            </p>
        </RouterLink>

        <section v-if="loading" class=" my-20">
            <p class="bg-orange text-zinc-50 px-4 w-2/4">
                Loading...
            </p>
        </section>

        <section v-else-if="project" class="project-detail my-12">

            <img :src="project.projects.thumbnail" alt="project-banner" class="w-full mb-8 rounded-md">

            <h1 class="text-3xl font-bold">
                {{ project.project_name }}
            </h1>
            <p class="mt-2 text-slate-600">{{ project.subtitle }}</p>

            <p class="mt-9">
                {{ project.description }}
            </p>
        </section>

        <section v-else class=" my-20">
            <p class="bg-orange text-zinc-50 px-4 w-2/4">
                {{ $t('common.project-not-found') }}
            </p>
        </section>

    </div>

    <Footer />
</template>
