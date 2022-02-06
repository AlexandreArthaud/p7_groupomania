<template>
  <div>
    {{ this.posts }}
    <div v-for="post in this.posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.file_path }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    console.log("hi");
    fetch('http://localhost:3000/api/posts/')
    .then(res => res.json().then(body => this.posts = body))
    .catch(error => console.error(error));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
