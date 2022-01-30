<template>
  <div id="nav">
    <router-link to="/" v-if="$store.state.authenticated">Accueil</router-link>
    <router-link to="/" v-if="!$store.state.authenticated">Login</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-link to="/post" v-if="$store.state.authenticated">Post</router-link>
    <a @click="logout" v-if="$store.state.authenticated">Logout</a>
    <router-link to="/register" v-if="!$store.state.authenticated">Register</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Log user out");
      this.$store.commit("SETAUTHENTICATION", false);
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 2%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
