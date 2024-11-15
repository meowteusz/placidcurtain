<script setup>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="d-inline-flex flex-column align-items-center py-4" style="margin-top: 10%; min-width: 25%;">
                <img src="../assets/mlds.svg" alt="MLDS Logo" width="400">

                <div style="min-width: 25%;" class="d-flex flex-column mt-4">
                    <div>
                        <input type="email" class="form-control" id="email_input" placeholder="Email"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mt-2">
                        <input type="password" class="form-control" id="password_input" placeholder="Password">
                    </div>

                    <div class="mt-2 d-flex mx-auto w-50 justify-content-center">
                        <button type="submit" class="btn btn-success w-75">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>