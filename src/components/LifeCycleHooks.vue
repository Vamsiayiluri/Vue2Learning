<template>
<router-link to="/">Go to Home Page</router-link>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">Change Message</button>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Initial Message',
    };
  },
  beforeCreate() {
    console.log('beforeCreate: Component is about to be created.');
  },
  created() {
    console.log('created: Component has been created.');
  },
  beforeMount() {
    console.log('beforeMount: Component is about to be added to the DOM.');
  },
  mounted() {
    console.log('mounted: Component has been added to the DOM.');
  },
  beforeUpdate() {
    console.log('beforeUpdate: Component is about to re-render due to data changes.');
  },
  updated() {
    console.log('updated: Component has re-rendered due to data changes.');
  },
  beforeUnmount() {
    console.log('beforeUnmount (beforeDestroy): Component is about to be removed from the DOM.');
  },
  unmounted() {
    console.log('unmounted (destroyed): Component has been removed from the DOM.');
  },
  errorCaptured(error, vm, info) {
    console.error('errorCaptured: An error occurred in the child component.');
    console.error('Error:', error);
    console.error('Vue instance:', vm);
    console.error('Error info:', info);
  },
  renderTracked() {
    console.log('renderTracked: Component\'s render function is accessed during render.');
  },
  renderTriggered() {
    console.log('renderTriggered: Component\'s render function is triggered during a re-render.');
  },
  methods: {
    changeMessage() {
      this.message = 'New Message';
    },
    
  },
};
</script>
