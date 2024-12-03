<script setup>
// Component Imports
import SearchIconVue from '@/assets/SearchIconVue.vue';

defineProps({
    title: String,
})

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink to="/me" class="navbar-brand">{{ title }}</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/me" class="nav-link">Me</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/students" class="nav-link">Students</RouterLink>
                    </li>
                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">
                        <SearchIconVue />
                    </button>
                    <button class="btn btn-outline-danger ms-2" type="submit">Logout</button>
                </div>
            </div>
        </div>
    </nav>
</template>