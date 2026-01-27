<template>
    <!-- heading -->
    <section class="my-tech-stack my-12">
        <h2 class="text-2xl">
            {{ $t('tech-stack.title') }}
        </h2>

        <!-- desc -->
        <p class="text-justify mt-8" v-html="$t('tech-stack.desc')"></p>

        <div class="flex flex-row justify-between">
            <div class=""></div>
            <div class="flex flex-row gap-4 md:gap-8 mt-8 ">
                <img src="../assets/icons/php.svg" alt="Php" width="40">
                <img src="../assets/icons/laravel.svg" alt="Laravel" width="30">
                <img src="../assets/icons/tailwind.svg" alt="Tailwind css" width="40">
                <img src="../assets/icons/mysql.svg" alt="MySQL" width="40">
            </div>
        </div>
    </section>

</template>
