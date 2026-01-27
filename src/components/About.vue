<template>

    <section class="about-me my-12">
        <!-- greetings -->
        <div class=" greetings flex flex-row items-center justify-start gap-8">
            <img src="../assets/pfp.jpeg" alt="Profile Photo" width="100" class="rounded-b-full rounded-r-full">
            <div class="">
                <h2 class="text-2xl font-semibold">
                    {{ $t('about.title') }}
                </h2>
                <p class="leading-relaxed">
                    {{ $t('about.subtitle') }}
                </p>
            </div>
        </div>

        <!-- about -->
        <div class="about">
            <p class="text-justify mt-8">
                {{ $t('about.desc') }}
            </p>
        </div>
    </section>

</template>
