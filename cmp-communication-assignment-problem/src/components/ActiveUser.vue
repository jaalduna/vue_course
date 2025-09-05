<template>
  <div class="active-user">
    <h2 v-if="user.name">{{ user.name }}</h2>
    <h3 v-if="user.age">{{ user.age }}</h3>
  </div>
</template>

<script>
export default { props: { user: { type: Object, required: true } } };
</script>
