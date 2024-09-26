<template>
  <div>
    <!-- <div class="grid-container">
      <div class="grid-item">Item 1</div>
      <div class="grid-item">Item 2</div>
      <div class="grid-item">Item 3</div>
      <div class="grid-item">Item 4</div>
      <div class="grid-item">Item 5</div>
      <div class="grid-item">Item 6</div>
    </div> -->
    <!-- <div class="grid-container">
      <div class="grid-item" style="grid-area: header">Header</div>
      <div class="grid-item" style="grid-area: sidebar">Sidebar</div>
      <div class="grid-item" style="grid-area: main">Main Content</div>
      <div class="grid-item" style="grid-area: footer">Footer</div>
    </div> -->
    <!-- <div style="display: block">Block Element 1</div>
    <div style="display: block">Block Element 2</div>

    <span style="display: inline">Inline Element 1</span>
    <span style="display: inline">Inline Element 2</span>

    <div style="display: flex">
      <div>Flex Item 1</div>
      <div>Flex Item 2</div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 2fr">
      <div>Grid Item 1</div>
      <div>Grid Item 2</div>
    </div>

    <div class="box">A 100x100 box</div>
    <div>This text is centered.</div>
    <div style="position: sticky; top: 20px; left: 50px">
      This element is absolutely positioned.
    </div> -->
    <div>
      <header>
        <h1>{{ headerText }}</h1>
      </header>
      <span class="displayRow">
        <span style="padding: 8px; font-size: 2rem; line-height: 1.5"
          >$249</span
        >
        <span class="textDecoration">$299</span>
      </span>
      <p class="text">{{ paragraphText }}</p>
      <div class="circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerText: "Welcome to My Vue App",
      paragraphText:
        "This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.This is a sample paragraph text that demonstrates how to use a header and a paragraph in a Vue component.",
    };
  },
};
</script>
<style scoped>
/* .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns     
  gap: 10px; /* Space between grid items 
  padding: 10px;
}

.grid-item {
  background-color: #2364aa;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
} */
.circle {
  background-color: blue;
  height: 100px;
  width: 100px;
  border: 4px solid rgb(0, 0, 0);
  outline: 2px solid rgb(229, 9, 9);
  outline-offset: 8px;
  margin: 3rem auto;
  border-radius: 50px;
}
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 10px;
}

.grid-item {
  background-color: #2364aa;
  color: white;
  padding: 20px;
  border-radius: 8px;
}
.box {
  width: 50%; /* 50% of the parent's width */
  height: 200px; /* Fixed height */
}
header {
  background-color: #2364aa; /* You can change the color as needed */
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 16px;
}

/* p {
  font-size: 2rem;
  line-height: 1.5;
  margin: 20px;
  width: 40ch;
} */
.textDecoration {
  text-decoration: line-through;
  padding: 8px;
  padding-top: 20px;
  font-size: 1rem;
  line-height: 1.5;
}
.displayRow {
  display: flex;
  align-content: flex-start;
}
.text{
  /* text-transform: capitalize; */
  text-align:justify;
  text-indent: 8px;
  line-height: 18px;
  letter-spacing: 2px;
}
</style>
