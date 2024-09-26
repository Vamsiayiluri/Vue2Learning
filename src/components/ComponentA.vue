<!-- ComponentA.vue -->
<template>
  <div>
    <h1>Component A</h1>
    <p>Formatted Name: {{ formatName(firstName) }}</p>
  </div>
</template>

<script>
import nameMixin from '../Mixins/nameMixin';

export default {
  mixins: [nameMixin],
  data() {
    return {
      firstName: 'John',
    };
  },
};
</script>
