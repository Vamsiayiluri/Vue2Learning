<template>
  <div class="form-container">
    <!-- form handling (two way binding)-->
    <h1>Form Handling</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="Name"> Name: </label>
        <input type="text" v-model="name" id="Name" />
      </div>

      <div class="form-group">
        <label for="ProjectDescription"> Project Description: </label>
        <textarea
          v-model="projectDescription"
          id="ProjectDescription"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="Country"> Country: </label>
        <select id="Country" v-model="country">
          <option disabled selected value="">Select your Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </select>
      </div>

      <div class="form-group">
        <label for="jobLocation">Job Location:</label>
        <select id="jobLocation" multiple v-model="jobLocations">
          <option value="">Select Job Location</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </select>
      </div>

      <div class="form-group">
        <input
          type="checkbox"
          id="remotework"
          v-model="remotework"
          true-value="yes"
          false-value="no"
        />
        <label for="remotework"> Open to remote work? </label>
      </div>

      <div class="form-group">
        <label><b>SkillSet</b></label>
        <div>
          <input type="checkbox" id="Sql" v-model="skillSet" value="SQL" />
          <label for="Sql"> SQL </label>
        </div>
        <div>
          <input type="checkbox" id="CSharp" v-model="skillSet" value="C#" />
          <label for="CSharp"> C# </label>
        </div>
        <div>
          <input type="checkbox" id="VueJs" v-model="skillSet" value="Vue.Js" />
          <label for="VueJs"> Vue.Js </label>
        </div>
      </div>

      <div class="form-group">
        <label><b>Years of Experience</b></label>
        <div>
          <input
            type="radio"
            id="0-2"
            name="experience"
            v-model="experience"
            value="0-2"
          />
          <label for="0-2"> 0-2 </label>
        </div>
        <div>
          <input
            type="radio"
            id="2-5"
            name="experience"
            v-model="experience"
            value="2-5"
          />
          <label for="2-5"> 2-5 </label>
        </div>
        <div>
          <input
            type="radio"
            id="moreThan5"
            name="experience"
            v-model="experience"
            value=">5"
          />
          <label for="moreThan5"> >5 </label>
        </div>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>

    <button @click="ShowPrevious" class="toggle-button">
      {{
        showPrevious ? "Hide Previous Submissions" : "Show Previous Submissions"
      }}
    </button>
    <div v-if="showPrevious" class="submissions">
      <h2>Previous Submissions:</h2>
      <div
        v-for="(submission, index) in formSubmissions"
        :key="index"
        class="submission"
      >
        <p><b>Name:</b> {{ submission.name }}</p>
        <p><b>Project Description:</b> {{ submission.projectDescription }}</p>
        <p><b>Country:</b> {{ submission.country }}</p>
        <p><b>Job Locations:</b> {{ submission.jobLocations.join(", ") }}</p>
        <p><b>Open to Remote Work:</b> {{ submission.remotework }}</p>
        <p><b>SkillSet:</b> {{ submission.skillSet.join(", ") }}</p>
        <p><b>Years of Experience:</b> {{ submission.experience }}</p>
      </div>
    </div>

    <p v-if="isSubmitted">Form Submitted Successfully!</p>
  </div>
</template>

<script>
export default {
  name: "FormHandling",
  data() {
    return {
      name: "",
      projectDescription: "",
      country: "",
      jobLocations: [],
      remotework: false,
      skillSet: [],
      experience: "",
      isSubmitted: false,
      formSubmissions: [],
      showPrevious: false,
    };
  },
  methods: {
    handleSubmit() {
      if (
        !this.name ||
        !this.projectDescription ||
        !this.country ||
        this.skillSet.length === 0 ||
        !this.experience
      ) {
        alert("Please fill in all required fields.");
      } else {
        this.formSubmissions.push({
          name: this.name,
          projectDescription: this.projectDescription,
          country: this.country,
          jobLocations: [...this.jobLocations], // Create a new array to avoid reactivity issues
          remotework: this.remotework,
          skillSet: [...this.skillSet], // Create a new array to avoid reactivity issues
          experience: this.experience,
        });
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
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-group input[type="checkbox"],
.form-group input[type="radio"] {
  width: auto;
  margin-right: 5px;
}

.submit-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.toggle-button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #5a6268;
}

.submissions {
  margin-top: 20px;
}

.submission {
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
