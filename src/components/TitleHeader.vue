<script setup>

defineProps({
    title: String
})

</script>

<template>
    <header class="pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <span class="fs-4 ms-2">{{ title }}</span>
        </a>
    </header>
</template>