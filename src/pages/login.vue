<template>
    <div class="flex justify-center items-center w-full h-[100vh]">
        <div class="q-pa-md" style="width: 400px">
            <pre>{{ {  username: 'kminchelle', password: '0lelplR',} }}</pre>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="name" label="Username *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                <q-input filled type="password" v-model="password" label="Password *" lazy-rules :rules="[
                    val => val !== null && val !== '' || 'Please password'
                ]" />


                <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
        </div>
    </div>
</template>
  
<script setup>
import { api } from '../api';
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const $q = useQuasar()
const router = useRouter();

const name = ref(null)
const password = ref(null)

const onSubmit = async () => {
    try {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: name.value,
                password: password.value,
                // expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then(res => {
                localStorage.token = res.token;
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    messpassword: 'Saved user'
                })

                router.push("/dashboard")
                
            });


    } catch (error) {
        console.log(error);
    }
}

const onReset = () => {
    name.value = null
    password.value = null
    accept.value = false
}


</script>
  