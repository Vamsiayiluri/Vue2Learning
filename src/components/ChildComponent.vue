
<template>
  <div>
    <p>Child Component</p>
    <p>Counter: {{ counter }}</p>
    <button @click="useIncrement">Use Increment</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    // Inject the counter and increment function from the parent
    const counter = inject('counter');
    const increment = inject('increment');

    const useIncrement = () => {
      increment();
    };

    return {
      counter,
      useIncrement,
    };
  },
};
</script>
