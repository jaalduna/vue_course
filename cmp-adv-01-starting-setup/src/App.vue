<template>
  <div>
    <TheHeader />
    <badgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
  <base-card>
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </CourseGoals>
  </base-card>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

import CourseGoals from "./components/CourseGoals.vue";
export default {
  components: {
    TheHeader,
    badgeList: BadgeList,
    "user-info": UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
