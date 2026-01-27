<script setup>
import { Pin } from 'lucide-vue-next';

defineProps({
    projectTitle: String,
    slug: String,
})
</script>

<template>
    <div class="flex flex-row gap-3 items-center">
        <Pin color="#1e293b" :size="20" />
        <RouterLink :to="`/project/${slug}`"
            class="font-semibold text-slate-800 hover:text-orange hover:underline cursor-pointer">
            {{ projectTitle }}
        </RouterLink>
    </div>
</template>
