import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);
/*
 *
this are global declared components.
  vue need to download all components that are used in the template.
  which could be a problem for large applications
  */
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
