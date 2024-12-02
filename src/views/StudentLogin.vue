<script setup>
// Vue Imports
import { ref } from 'vue'
import { useRouter } from 'vue-router';

// Library Imports
import { supabase } from '@/supabaseClient'

// Component Imports
import GitHubLogo from '@/assets/GitHubLogo.vue';

const isSigningIn = ref(false);
const router = useRouter();

async function login() {
    try {
        isSigningIn.value = true;

        const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' });

        if (!error) {
            router.push("/me");
        }

    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        isSigningIn.value = false;
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-inline-flex flex-column align-items-center py-4" style="margin-top: 10%; min-width: 25%;">
                <img src="../assets/mlds.svg" alt="MLDS Logo" width="400">

                <div style="min-width: 25%;" class="d-flex flex-column mt-4">

                    <div class="mt-2 d-flex mx-auto justify-content-center">

                        <button @click="login"
                            class="btn btn-outline-nu w-100 d-inline-flex justify-content-center flex-row flex-no-wrap"
                            style="align-items: center;">
                            <GitHubLogo />
                            &nbsp;
                            Sign in with GitHub

                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.btn-outline-nu {
    color: #2b004f;
    border-color: #2b004f;
}

.btn-outline-nu:hover {
    color: #fff;
    background-color: #E4E0EE;
    border-color: #B6ACD1;
}

.btn-outline-nu:focus,
.btn-outline-nu.focus {
    box-shadow: 0 0 0 0.2rem rgba(43, 0, 79, 0.5);
}

.btn-outline-nu:active,
.btn-outline-nu.active {
    color: #fff;
    background-color: #2b004f;
    border-color: #2b004f;
}
</style>