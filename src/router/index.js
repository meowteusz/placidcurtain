import { createRouter, createWebHistory } from "vue-router";
import StudentLogin from "@views/StudentLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "student-login",
      component: StudentLogin,
    },
    {
      path: "/admin",
      name: "admin-login",
      component: () => import("@views/AdminLogin.vue"),
    },
    {
      path: "/admin/students",
      name: "students",
      component: () => import("@views/StudentOverview.vue"),
    },
    {
      // We don't want a null student so if they browse
      // manually to /student and don't supply an ID we
      // send them to /students instead.
      path: "/student",
      redirect: { name: "/admin/students" },
    },
    {
      path: "/student/:id",
      name: "student",
      component: () => import("@views/StudentDetail.vue"),
    },
    {
      path: "/me",
      name: "self-view",
      component: () => import("@views/SelfView.vue"),
    },
  ],
});

export default router;
