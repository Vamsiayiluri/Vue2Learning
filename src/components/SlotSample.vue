<template>

  <h1>Nested Component {{username}}</h1>  

  <div class="child-component">
    <h1>Child Component</h1>
    <slot></slot>

    <slot name="header">
      <p>Default Header Content</p>
    </slot>

    <slot name="content">
      <p>Default Content</p>
    </slot>

    <slot name="footer">
      <p>Default Footer Content</p>
    </slot>
  </div>

  <p></p>
</template>

<script>
export default {
  name: 'SlotSample',
  inject:['username']
}
</script>

<style>
.child-component {
  border: 1px solid #ccc;
  padding: 10px;
}

</style>
