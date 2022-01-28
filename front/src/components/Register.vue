
<template>
    <div>
        <h1>Register</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="register()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            register() {
                fetch('http://localhost:3000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'login': this.input.username, 'password': this.input.password })
                })
                .then(
                    (res) => {
                        console.log(res);
                    }
                )
                .catch(() => console.log("not working"));
            }
        }
    }
</script>
<style scoped></style>