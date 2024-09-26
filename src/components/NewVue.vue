<template>
  <button @click="$emit('dataEmitted', { message: 'Hello from child!' })">Send Data to Parent</button><br>
  <!-- call Parent Method -->

   <button @click="callParentMethod">Call Parent Method</button><br>
 
</template>

<script>

export default {
    components :{
    
  },
  emits:['dataEmitted'],
  methods: {
    
    callParentMethod() {
      // Call the parent component's method using this.$parent
      this.$parent.parentMethod();
      
    },
    childMethod() {
      // Child component method logic here
      alert("Child method called from parent")
    }
    

  }
};
</script>