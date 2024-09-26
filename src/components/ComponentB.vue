<!-- ComponentB.vue -->
<template>
  <div>
    <h1>Component B</h1>
    <p>Formatted Name: {{ formatName(lastName) }}</p>
  </div>
</template>

<script>
import nameMixin from '../Mixins/nameMixin';

export default {
  mixins: [nameMixin],
  data() {
    return {
      lastName: 'Doe',
    };
  },
};
</script>
