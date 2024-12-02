<script setup>
// Vue Imports
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

import { supabase } from '@/supabaseClient'
// import { useAuthStore } from '@stores/session';

// const store = useAuthStore();
const router = useRouter();

async function printLogin() {
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user);
}

supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_IN') {
    printLogin();
    router.push('/me');
  }
});
</script>

<template>
  <RouterView />
</template>
