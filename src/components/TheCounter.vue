<template>
    <div>
    <h3>{{normalCounter}}</h3>
    <button @click="Addone">Add10</button>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
    export default{
        computed :{
            ...mapGetters('a',['normalCounter'])
        },
         methods: {
    ...mapMutations('a',['increase']),
    Addone() {
      // Call the 'increment' mutation with a payload
      this.increase(5); // Pass the payload
    },
    }
    }
</script>