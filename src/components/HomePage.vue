<template>
  <div class="box">
    <p v-if="username">Welcome, {{ username }}!</p>
    <p v-else>Please wait...</p>
    
    <p>You are now logged in.</p>
    <button @click="logout">Logout</button>
    <br>
    <br>
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.id }}, {{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: "",
      posts: []
    };
  },
  created() {
    this.username = this.$route.params.username;
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.posts = response.data;
      });
  },
  methods: {
    logout() {
       this.$router.replace('/LoginSuccessful');
    },
  },
};
</script>

<style scoped>
.box {
  border: 2px solid #ccc;
  
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  background-color: #f7f7f7;
}

.post-list {
  max-height: 400px; /* Set the maximum height for the container */
  overflow-y: auto; /* Add a vertical scrollbar when content overflows */
}

.post {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
