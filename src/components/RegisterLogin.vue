<template>
  
   <div class="box">
    <router-link to="/LoginCheck">Signup</router-link><br>
    
    <router-link  to="/LoginSuccessful">Login</router-link><br>
   </div>  

  

</template>

<script>


export default {
  name: 'App',
  
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  border: 2px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  background-color: #f7f7f7;
}
h1{
  text-align: center;
}
</style>


