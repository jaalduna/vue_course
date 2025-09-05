<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>The default</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.header);
  },
};
// This is a base card component that can be used to wrap content in a styled card layout.
// It does not have any props or data for now, but can be extended in the future.
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
