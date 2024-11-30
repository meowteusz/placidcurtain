<script setup>
// Vue Imports
import { ref, onMounted } from 'vue'

// Library Imports
import { supabase } from '@/supabaseClient'

// Component Imports
import UserCard from '@comp/UserCard.vue'
import TitleHeader from '@comp/TitleHeader.vue'

const profiles = ref([])

async function getProfiles() {
    const { data } = await supabase.from('profiles').select('id, first_name, last_name, admit_term').limit(15)
    profiles.value = data
}

onMounted(() => {
    getProfiles()
})

</script>

<template>
    <TitleHeader :title="`MLDS Students`" class="py-4" />
    <div class="container">

        <div class="d-flex flex-wrap">
            <UserCard class="me-2 mb-3" style="width: 32%;" v-for="student in profiles" :key="student.id"
                :data="student" />
        </div>
    </div>

</template>