<template>
  <br>
  <h2>Login Application</h2>
  <br>
  <br>
    <div class ="box">
    <h2>Login here</h2>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username"><br>
    <span v-if="usernameError" class="error">{{ usernameError }}</span><br>

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password"><br>
    <span v-if="passwordError" class="error">{{ passwordError }}</span><br>

    <button @click="Login">Login</button>
    
    <p>Don't have an account?</p>
     <router-link to="/LoginCheck">Signup</router-link>
  </div>
  <p></p>
</template>

<script>
  
  export default {
  
  data() {
    return {
      username: '',
      password: '',
      
      LoginSuccess:'',
    };
  },
  methods:{
    Login(){
      const username = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (this.username === username && this.password === savedPassword) {
        this.$router.push({ name: 'HomePage', params: { username } });
        
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  }
  }
</script>
<style>
  .box {
  border: 2px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: #f7f7f7;
}
</style>

