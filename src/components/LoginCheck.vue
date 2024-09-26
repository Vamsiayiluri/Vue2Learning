<template>
  <br>
  
  
  <br>
  <br>
    <div class="box">
    <h2>Register here</h2>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username"><br>
    <span v-if="usernameError" class="error">{{ usernameError }}</span><br>

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password"><br>
    <span v-if="passwordError" class="error">{{ passwordError }}</span><br>

    <button @click="SignUp">SignUp</button>
    
    <p>Already have an account?</p>
    <router-link to="/LoginSuccessful">Login</router-link>

  </div>
  <p></p>
</template>

<script>
  
  export default {
  
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      SignUpSuccess:'',
    };
  },
  methods: {

    SignUp() {
      
      const isUsernameValid = this.validateUsername();
      const isPasswordValid = this.validatePassword();

      
      this.usernameError = isUsernameValid ? '' : 'Invalid username';
      this.passwordError = isPasswordValid ? '' : 'Invalid password';

      
      if (isUsernameValid && isPasswordValid) {
        this.SignUpSuccess=true;
        alert('Signed up Successfully')
        
       
      }
      else{
        this.SignUpSuccess=false;
      }

      if(this.SignUpSuccess===true){
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
      }
      this.reset()
      
    },
    reset()
    {
      this.username=''
      this.password=''
      this.$router.replace('/LoginSuccessful')
    },
    validateUsername() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.username);
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return passwordRegex.test(this.password);
    }
  },
  watch: {
    username() {
        
      this.usernameError = this.validateUsername()?'' : 'Invalid username';
    },
    password() {
      this.passwordError = !this.validatePassword()
        ? 'Please enter a valid password'
        : '';
    },
  }
 
}
</script>

<style>
link{
  text-align: center;
}
.box {
  border: 2px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: #f7f7f7;
}
.error {
  color: red;
  font-size: 12px;
}
</style>