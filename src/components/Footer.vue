<script setup>
import { Github } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
</script>

<template>
    <footer class="container mx-auto px-10 md:px-48 my-12">
        <div class="flex flex-row justify-between w-full">
            <p class="opacity-70">&copy; 2026 Ryan ferdiansyah</p>

            <div class="flex flex-row gap-5 items-center">
                <a href="https://github.com/nothazel24">
                    <Github color="#F26419" :size="20"/>
                </a>
                <a href="https://www.instagram.com/frdnryann_/">
                    <Instagram color="#F26419" :size="20"/>
                </a>
            </div>
        </div>
    </footer>
</template>