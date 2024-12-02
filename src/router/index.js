// Vue Imports
import { createRouter, createWebHistory } from "vue-router";

// Component Imports
import StudentLogin from "@views/StudentLogin.vue";

// Library Imports
import { supabase } from "@/supabaseClient";

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
      path: "/students",
      name: "students",
      component: () => import("@views/StudentOverview.vue"),
      meta: { requiresAuth: true },
    },
    {
      // We don't want a null student so if they browse
      // manually to /student and don't supply an ID we
      // send them to /admin/students instead.
      path: "/student",
      redirect: { name: "/students" },
    },
    {
      path: "/student/:id",
      name: "student",
      component: () => import("@views/StudentDetail.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/me",
      name: "self-view",
      component: () => import("@views/SelfView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from) => {
  // Only enter conditional if the page needs auth
  if (to.meta.requiresAuth) {
    const { data: { user } } = await supabase.auth.getUser();

    if (user.aud !== "authenticated") {
      switch (from.name) {
        case "student-login":
          return { name: "student-login" };
        case "admin-login":
          return { name: "admin-login" };
        default:
          router.push({ name: "student-login" });
      }
    }
  }
});

export default router;
