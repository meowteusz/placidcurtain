<script setup>

defineProps({
    data: Object,
})

</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="data.avatar_url" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <RouterLink :to="`/student/${data.id}`" class="nav-link">
                        <h5 class="card-title d-flex">{{ data.first_name + " " + data.last_name }}</h5>
                    </RouterLink>
                    <p class="card-text"><small class="text-body-secondary">{{ data.admit_term + " cohort" }}</small>
                    </p>

                </div>
            </div>

        </div>

    </div>
</template>

<style>
img {
    border-radius: 50%;
}
</style>
