export default{
    namespaced:true,
    state:{
        counter:0    
      },
      mutations: {
        increment(state){
          state.counter = state.counter+1;
        },
        increase(state,value){
          state.counter=state.counter + value;
        }
      },
      actions:{
          increment(context){
            setTimeout(() => {
              context.commit('increment')
            }, 1000)
           
          }
      },
      getters:{
        Counter(state){
            return state.counter
        },
        finalCounter(state){
          return state.counter*2; 
        },
        normalCounter(_,getters){
          const finalCounter=getters.finalCounter;
          if(finalCounter<0)
          {
            return 0;
          }
          if(finalCounter>100)
          {
            return 100;
          }
          return finalCounter;
        }
      }
  }
    