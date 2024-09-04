<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const profiles = ref([])

async function getProfiles() {
  const { data } = await supabase.from('profiles').select()
  profiles.value = data
}

onMounted(() => {
  getProfiles()
})
</script>

<template>
  <ul>
    <li v-for="profile in profiles" :key="profile.id">{{ profile }}</li>
  </ul>
</template>