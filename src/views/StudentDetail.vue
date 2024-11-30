<script setup>
// Vue Imports
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Library Imports
import { supabase } from '@/supabaseClient'

// Component Imports
import NavbarMain from '@comp/NavbarMain.vue'


const route = useRoute()
const profile = ref()
const loading = ref("Loading...")

async function get_profile() {
    const { data } = await supabase.from('profiles').select().eq('id', route.params.id)
    // .eq() normally returns ALL rows that match the 
    // condition, so we need to get the first one. Which
    // there should only be one of as ID is unique.
    profile.value = data[0]
    loading.value = profile.value.first_name + " " + profile.value.last_name
}

onMounted(() => {
    get_profile()
})

</script>

<template>
    <NavbarMain :title="`MLDS`" />

    <div class="container">
        <div contenteditable="true">
            {{ profile.first_name }}
        </div>
    </div>
</template>