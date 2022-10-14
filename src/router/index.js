import { createRouter, createWebHistory } from "vue-router"
import About from "../views/AboutView.vue"
import Canvas from "../views/testCanvas.vue"
import End from "../views/endView.vue"
import Home from "../views/homeView.vue"

const routes = [
  {
    path: "/about/:id?",
    name: "About",
    component: About,
  },
  {
    path: "/canvas",
    name: "Canvas",
    component: Canvas,
  },
  {
    path: "/end",
    name: "End",
    component: End,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
