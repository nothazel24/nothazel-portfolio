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

/*

    TASK
    DISINI PROSES FETCHING MASIH DELAY (LAMA)
    COBA NANTI DI IMPROVE PERFORMANCENYA, AGAR BROWSER TIDAK MENAMPILKAN "PROJECT TIDAK DAPAT DITEMUKAN"
    TERLEBIH DAHULU.

    (INI BERLAKU UNTUK ProjectDetail.vue & Home.vue)

*/

// fetching data dari supabase
const fetchProject = async () => {
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
    } else {
        project.value = data
    }

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

    <section v-if="project" class="project-detail my-12">
        <div class="body-wrapper container mx-auto px-10 md:px-48">

            <RouterLink to="/" class="my-9 flex items-center gap-3">
                <CircleArrowLeft color="#F26419" :size="25" />
                <p class="text-sm text-orange hover:underline">
                    {{ $t('common.back-to-home') }}
                </p>
            </RouterLink>

            <!-- 
            
            TASK:
            MASIH ADA BUG DI BAGIAN SINI, YAITU SAAT LOCALE DI SET KE SALAH SATU BAHASA YANG TIDAK TERSEDIA TRANSLASINYA DI SUPABASE, HARUSNYA TIDAK ADA DATA YANG DITAMPILKAN (SEPERTI YANG ADA DI HOMEPAGE). 

            AKAN TETAPI, DISINI DATANYA MASIH MENYEDIAKAN DATA YANG ADA DI SUPABASE, TIDAK PEDULI TRANSLASI YANG DIPILIHNYA ADA ATAU TIDAK

            NANTI COBA PERBAIKI, DAN IMPROVE DIKIT (KASIH KETERANGAN BAHWA DATA YANG DICARI TIDAK ADA TRANSLASINYA.)
            
            -->

            <img :src="project.projects.thumbnail" alt="project-banner" class="w-full mb-8 rounded-md">

            <h1 class="text-3xl font-bold">
                {{ project.project_name }}
            </h1>
            <p class="mt-2 text-slate-600">{{ project.subtitle }}</p>

            <p class="mt-9">
                {{ project.description }}
            </p>

            <!-- PEMBATAS TUGAS -->

        </div>
    </section>

    <section v-else class="container mx-auto px-10 md:px-48 my-20">
        <p class="bg-orange text-zinc-50 px-4 w-2/4">
            {{ $t('common.project-not-found') }}
        </p>
    </section>

    <Footer />
</template>
