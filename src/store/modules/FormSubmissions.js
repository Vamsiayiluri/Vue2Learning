export default{
    namespaced:true,
    state: {
        formSubmissions: [],
      },
      mutations: {
        addFormSubmission(state, newuser) {
          state.formSubmissions.push(newuser);
          
        },
      },
      
      getters: {
        getFormSubmissions(state) {
          return state.formSubmissions;
        }
      }
    };