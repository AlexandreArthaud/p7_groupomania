<template>
    <form>
        <h1>Post</h1>
        <input type="text" name="title" v-model="input.title" placeholder="Title" />
        <input type="file" name="file" @change="handleFileChange($event, index)"/>
        <input type="text" name="caption" v-model="input.caption" placeholder="Caption" />
        <button type="button" v-on:click="submit()">Poster</button>
    </form>
</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
                input: {
                    title: "",
                    caption: "",
                    file: null,
                }
            }
        },
        methods: {
            handleFileChange(evt) {
                this.input.file = evt.target.files[0];
            },
            submit() {
                fetch('http://localhost:3000/api/posts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'title': this.input.title,
                        'caption': this.input.caption,
                        'file': this.input.file,
                    }),
                })
                .then(
                    (res) => {
                        console.log(res);
                    }
                )
                .catch((err) => console.log(err));
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>
