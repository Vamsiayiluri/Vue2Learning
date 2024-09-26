<!-- AsyncCompon
  components: { PropsSample },ent.vue -->
<template>
  <div>
    <h2>Async Component</h2>
    <p>This component is loaded asynchronously!</p>
    <props-sample :fullname="name"></props-sample>
  </div>
</template>

<script>
import PropsSample from './PropsSample.vue';

export default{
  components:{
    PropsSample
  },
  setup(){
      const name="Vamsi Ayiluri"

      return{
        name
      }
  }
}

</script>
