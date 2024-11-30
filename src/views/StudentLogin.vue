<script setup>
// Vue Imports
import { ref } from 'vue'

// Library Imports
import { supabase } from '@/supabaseClient'

const loading = ref(false)
const email = ref('')

async function login() {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithOtp({
            email: email.value,
        })
        if (error) throw error
        alert('Check your email for the login link!')
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message)
        }
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-inline-flex flex-column align-items-center py-4" style="margin-top: 10%; min-width: 25%;">
                <img src="../assets/mlds.svg" alt="MLDS Logo" width="400">

                <div style="min-width: 25%;" class="d-flex flex-column mt-4">
                    <div>
                        <input class="form-control" type="email" v-model="email" id="email_input" placeholder="Email">
                    </div>

                    <div class="mt-2 d-flex mx-auto w-50 justify-content-center">
                        <button @click="login" class="btn btn-success w-100">Send Magic Link</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>