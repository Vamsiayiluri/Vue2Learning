<template>
  <div>
    <div>
      <p>Module A Value: {{ finalCounter }}</p>
      <p>Module B Value: {{ value }}</p>
    </div>
    <button @click="updateValues">Update Values</button>
  </div>
</template>

<script>
import {  mapActions,mapGetters } from 'vuex';


export default {
   computed :{
            ...mapGetters(['finalCounter'])
        },
    
   
  
  methods: {
    ...mapActions('a', ['asyncUpdateValueA']),
   
    async updateValues() {
      this.asyncUpdateValueA();
      
    }
  },
 
};
</script>
