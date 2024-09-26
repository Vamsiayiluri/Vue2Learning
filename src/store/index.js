import { createStore } from 'vuex';
import moduleA from './modules/counter'
import FormSubmissions from './modules/FormSubmissions';
const store=createStore({
 
    modules: {
      a:moduleA, 
      b:FormSubmissions
    },
    
  });

  export default store;