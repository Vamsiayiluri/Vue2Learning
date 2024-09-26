<template>
  <div>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>

    <p>Counter: {{ state.counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="SendData">Send data</button>

    <child-component></child-component>
  </div>
</template>

<script>
import { reactive,toRefs, } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup(context) {
    const person = reactive({
      firstName: 'John',
      lastName: 'Doe',
    });

    const state = reactive({
      counter: 0,
    });

    function increment() {
      state.counter++;
    }
    function SendData() {
      context.emit('senddata',person.firstName)
    }

  

    return {
      ...toRefs(person),
       state,
      increment,
      SendData
    };
  },
};
</script>
