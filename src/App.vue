<template>
  <div id="app">
    <grid-css msg="Welcome to Your Vue.js App" />
    <!-- <sample-page></sample-page> -->
  </div>
</template>

<script>
// import FormHandling from "./components/FormHandling.vue";
import GridCss from './components/GridCss.vue';
// import SamplePage from './components/SamplePage.vue';

export default {
  name: "App",
  components: {
    // FormHandling,
    GridCss,
    // SamplePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
