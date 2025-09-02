<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "hide" : "show" }} details
    </button>
    <button @click="toggleFavorite">favorite</button>
    <button @click="deleteContact">delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone</strong> {{ phoneNumber }}</li>
      <li><strong>Email</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
    },
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warning("id should be defined");
        return false;
      }
    },
    "delete-contact": function (id) {
      if (id) {
        return true;
      } else {
        console.warning("id should be defined");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteContact() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>
