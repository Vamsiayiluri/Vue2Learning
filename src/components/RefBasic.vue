<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment1">Increment</button>

    <h2>Custom Input Example</h2>
    <input type="text" v-model="original" />

     <p>Original Value: {{ original }}</p>
    <p>Doubled Value: {{ doubled }}</p>

     <props-sample :fullname="name"></props-sample>

      <p>Count: {{ counter1.count }}</p>
    <button @click="counter1.increment">Increment</button>
    <button @click="counter1.decrement">Decrement</button>

    <reactive-basic @senddata="recievedata"></reactive-basic>
    <props-sample :fullname="name"></props-sample>
  </div>
</template>

<script>
import { ref,computed,watch,provide } from 'vue';
import PropsSample from './PropsSample.vue';
import { useCounter } from '../composables/useCounter';
import ReactiveBasic from './ReactiveBasic.vue';
export default {
  
  components: { PropsSample, ReactiveBasic },
  setup() {
    const counter = ref(0);

    const original = ref('');

    const doubled = computed(() => original.value * 2);

    const name=ref("Vamsi Ayiluri")

    const counter1 = useCounter();

      const increment = () => {
      counter.value++;
    };

    
    provide('counter', counter);
    provide('increment', increment);

    function increment1() {
      counter.value++;
    }
    function recievedata(firstname) {
      alert('hello', firstname)
      
    }
    watch(counter, (newVal, oldVal) => {
      console.log(`Counter changed: ${oldVal} -> ${newVal}`);
    });

    return {
      counter,
      increment1,
      original,
      counter1,
      doubled,
      name,
      recievedata,
      
    };
  },
};
</script>
