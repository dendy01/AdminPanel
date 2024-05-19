import HomePage from "@/pages/HomePage.vue";
import UserPage from "@/pages/UserPage.vue";
import AdminPage from "@/pages/AdminPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/user",
    component: UserPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/AdminPanel")
});

export default router;
