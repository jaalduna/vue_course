<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="text" v-model="newFriendName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="newFriendPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="newFriendEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newFriendName: "",
      newFriendPhone: "",
      newFriendEmail: "",
    };
  },
  emits: ["add-contact"],
  methods: {
    addContact() {
      console.log("new contact");
      const newContact = {
        id: this.newFriendName.toLowerCase().replace(/\s+/g, "-"),
        name: this.newFriendName,
        phone: this.newFriendPhone,
        email: this.newFriendEmail,
        isFavorite: false,
      };
      this.$emit("add-contact", newContact);
      this.newFriendName = "";
      this.newFriendPhone = "";
      this.newFriendEmail = "";
    },
  },
};
</script>
