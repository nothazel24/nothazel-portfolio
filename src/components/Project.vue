<script setup>
defineProps({
    projectTitle: String,
    slug: String,
})
</script>

<template>
    <RouterLink :to="`/project/${slug}`" class="underline font-semibold text-slate-800 hover:text-slate-950 cursor-pointer">
        {{ projectTitle }}
    </RouterLink>
</template>
