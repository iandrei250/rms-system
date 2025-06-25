import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DeviceDashboard from "../pages/DeviceDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/device",
      name: "Device Dashboard",
      component: DeviceDashboard,
    },
  ],
});

export default router;
