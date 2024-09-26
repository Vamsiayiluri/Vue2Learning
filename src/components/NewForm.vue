<template>
    <div>
        
<!-- form handling (two way binding)-->
<h1>Form Handling</h1>
<form v-if="!showPrevious" @submit.prevent="handleSubmit" class="form-container">
    <label for="Name"> Name : </label>
    <input type="text" v-model="name" id="Name"><br>
    
    <label for="Project Description"> Project Description : </label><br>
    <textarea v-model="projectDescription" id="Project Description"></textarea><br>
    
    <label for="Country"> Country : </label>
    <select id="Country" v-model="country">
      <option disabled selected value="">Select your Country</option>
      <option value="India">India</option>
      <option value="Australia">Australia</option>
      <option value="England">England</option>
    </select><br>
    
    <label for="jobLocation">Job Location:</label>
    <select id="jobLocation" multiple v-model="jobLocations">
      <option value="">Select Job Location</option>
      <option value="India">India</option>
      <option value="Australia">Australia</option>
      <option value="England">England</option>
    </select><br>
    
    <input type="checkbox" id="remotework" v-model="remotework" true-value="yes" false-value="no">
    <label for="remotework"> Open to remote work ? </label><br>
    
    <label><b>SkillSet</b></label><br>
    <input type="checkbox" id="Sql" v-model="skillSet" value="SQL">
    <label for="Sql"> SQL </label>
    <input type="checkbox" id="C#" v-model="skillSet" value="C#">
    <label for="C#"> C# </label>
    <input type="checkbox" id="Vue.Js" v-model="skillSet" value="Vue.Js">
    <label for="Vue.Js"> Vue.Js </label><br>
    
    <label><b>Years of Experience</b></label><br>
    <input type="radio" id="0-2" name="experience" v-model="experience" value="0-2">
    <label for="0-2"> 0-2 </label>
    <input type="radio" id="2-5" name="experience" v-model="experience" value="2-5">
    <label for="2-5"> 2-5 </label>
    <input type="radio" id=">5" name="experience" v-model="experience" value=">5">
    <label for=">5"> >5 </label><br>

    <button type="submit">Submit</button>
  </form><br>

    <button @click="ShowPrevious">
      {{ showPrevious ? 'Hide Previous Submissions' : 'Show Previous Submissions' }}
    </button>
    
    <prev-submissions v-if="showPrevious"></prev-submissions>

  </div>
</template>

<script>
import PrevSubmissions from './PrevSubmissions.vue'
import { mapMutations} from 'vuex';
export default {
  name: 'FormHandling',
  components:{PrevSubmissions},
  props: {
    name1: {
      type: String,
      required: true
    }
  },
  data(){
    return{
     
      name: "",
    projectDescription: "",
    country: "",
    jobLocations: [],
    remotework: false,
    skillSet: [],
    experience: "",
    isSubmitted: false,
     
     showPrevious: false,
     
  };
    
  },

    
    
     methods: {
    ...mapMutations('b',['addFormSubmission']),
    handleSubmit() {

       if (!this.name || !this.projectDescription || !this.country || this.skillSet.length === 0 || !this.experience) {
        
        alert('Please fill in all required fields.');
         
      }
      else{
      
        const newuser={
        name: this.name,
        projectDescription: this.projectDescription,
        country: this.country,
        jobLocations: [...this.jobLocations], // Create a new array to avoid reactivity issues
        remotework: this.remotework,
        skillSet: [...this.skillSet], // Create a new array to avoid reactivity issues
        experience: this.experience,
      };
      this.addFormSubmission(newuser)
       this.isSubmitted = true;
       this.resetForm();
      }
    },
    resetForm() {
      
      this.name = "";
      this.projectDescription = "";
      this.country = "";
      this.jobLocations = [];
      this.remotework = false;
      this.skillSet = [];
      this.experience = "";
      this.isSubmitted = false;
    },
    
     ShowPrevious() {
      
      this.showPrevious = !this.showPrevious;
    },

    
     
  },
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
}

select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.button-secondary {
  background-color: #ccc;
  color: #fff;
}

.previous-submissions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

.previous-submissions h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.previous-submissions p {
  margin: 5px 0;
}

</style>
