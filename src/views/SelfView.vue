<script setup>
// Vue Imports
import { ref, onMounted } from 'vue'

// Library Imports
import { supabase } from '@/supabaseClient'

// Component Imports
import NavbarMain from '@comp/NavbarMain.vue'

const profile = ref({ "type": 'Object' });
const loading = ref("Loading...");

async function get_profile() {
    const { data: { user } } = await supabase.auth.getUser();
    const github_username = user.user_metadata.user_name;

    const { data } = await supabase.from('profiles').select().eq('github_username', github_username)
    console.log(data)
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

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img :src="profile.avatar_url" class="card-img-top" alt="Profile Picture">
                </div>
            </div>

            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title mb-4">Edit Profile</h3>
                        <form @submit.prevent="saveChanges">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">GitHub Username</label>
                                    <input v-model="profile.github_username" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">First Name</label>
                                    <input v-model="profile.first_name" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Last Name</label>
                                    <input v-model="profile.last_name" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Student ID</label>
                                    <input v-model="profile.student_id" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">NetID</label>
                                    <input v-model="profile.net_id" type="text" class="form-control" readonly>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Ethnicity</label>
                                    <input v-model="profile.ethnicity" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Student Email</label>
                                    <input v-model="profile.student_email" type="email" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">LinkedIn Profile</label>
                                    <input v-model="profile.linkedin_url" type="url" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Admit Term</label>
                                    <input v-model="profile.admit_term" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Gender</label>
                                    <input v-model="profile.gender" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Preferred Pronouns</label>
                                    <input v-model="profile.pronouns" type="text" class="form-control">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Operating System</label>
                                    <select v-model="profile.os" class="form-select">
                                        <option value="macos">macOS</option>
                                        <option value="windows">Windows</option>
                                        <option value="linux">Linux</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Citizenship</label>
                                    <input v-model="profile.citizenship" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="btn btn-primary me-2">Save Changes</button>
                                <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>