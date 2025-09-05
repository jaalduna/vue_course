<template>
  <div class="active-user">
    <h2>add User</h2>
    <input class="" type="text" v-model="user.name" placeholder="name" />
    <input type="number" v-model.number="user.age" placeholder="age" />
  </div>
</template>

<script>
export default {
  data() {
    return { user: { name: "", age: null } };
  },
  emits: ["user-change"],

  watch: {
    user: {
      handler() {
        this.$emit("user-change", { ...this.user });
      },
      deep: true,
    },
  },
};
</script>
