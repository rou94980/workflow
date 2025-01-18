import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/IndexView.vue"),
    meta: {
      title: "workflow",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} ｜ WORK FLOW`;
  } else {
    document.title = `WORK FLOW`;
  }
});

export default router;
