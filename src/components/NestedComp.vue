<template>
  <div>
    <h1>Parent Component</h1>
    <SlotSample>Sample example on Slots</SlotSample>

    <SlotSample>
      
      <template v-slot:header>
        
      </template>
      <template v-slot:content>
        <p>Content Slot Content</p>
      </template>

      <template v-slot:footer>
        <p>Footer Slot Content</p>
      </template>
    </SlotSample>
  </div>
</template>

<script>
import SlotSample from './SlotSample.vue';

export default {
  components: {
    SlotSample,
  },
  methods: {
    handleButtonClick() {
      alert('Button clicked!');
    }
  }
}
</script>

<style scoped>
h1{
 color:red
}
</style>
