<template>
    <div>
      <h2>Previous Submissions:</h2>
      <div v-for="(submission, index) in getFormSubmissions" :key="index">
        <p><b>Name:</b> {{ submission.name }}</p>
        <p><b>Project Description:</b> {{ submission.projectDescription }}</p>
        <p><b>Country:</b> {{ submission.country }}</p>
        <p><b>Job Locations:</b> {{ submission.jobLocations.join(', ') }}</p>
        <p><b>Open to Remote Work:</b> {{ submission.remotework }}</p>
        <p><b>SkillSet:</b> {{ submission.skillSet.join(', ') }}</p>
        <p><b>Years of Experience:</b> {{ submission.experience }}</p>
     
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('b', ['getFormSubmissions']),
  },
};
</script>
