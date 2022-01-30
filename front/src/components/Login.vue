<template>
    <div>
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
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
            login() {
                fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'username': this.input.username, 'password': this.input.password })
                })
                .then(
                    () => {
											this.$store.commit("SETAUTHENTICATION", true);
											this.$router.replace({ name: 'home' });
                    }
                )
                .catch(() => console.log("The username and / or password is incorrect"));
            }
        }
    }
</script>
<style scoped></style>
