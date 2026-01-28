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
            class="relative inline-block font-semibold text-slate-800 hover:text-orange after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-300 hover:after:scale-x-100">
            {{ projectTitle }}
        </RouterLink>
    </div>
</template>
