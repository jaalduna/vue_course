//create app
//mount it
//declare data
//v-bind to href
//v-html : interpet text as html

const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalB: "<h1>title text</h1>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
