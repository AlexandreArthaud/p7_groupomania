<template>
    <div>
        <h1>Post</h1>
        <input type="text" name="title" v-model="input.title" placeholder="Title" />
        <input type="file" name="file" />
        <input type="text" name="caption" v-model="input.caption" placeholder="Caption" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
                input: {
                    title: "",
                    caption: "",
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
    }
</style>
