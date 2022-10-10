import { createRouter, createWebHistory } from "vue-router"
import About from "../views/AboutView.vue"
import canvas from "../views/testCanvas.vue"
import End from "../views/endView.vue"

const routes = [
  {
    path: "/about/:id?",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "canvas",
    component: canvas,
  },
  {
    path: "/end",
    name: "End",
    component: End,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
