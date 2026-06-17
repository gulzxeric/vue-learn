import { createRouter, createWebHistory } from "vue-router";
import { ref } from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import User from "@/views/User.vue";
import UserProfile from "@/views/UserProfile.vue";
import UserSettings from "@/views/UserSettings.vue";
import Secret from "@/views/Secret.vue";
import Search from "@/views/Search.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'settings', component: UserSettings },
    ]
  },
  { path: '/secret', component: Secret },
  { path: '/search', component: Search },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isLoggedIn = ref(false)

router.beforeEach((to, from) => {
  if (to.path === '/secret' && !isLoggedIn.value) {
    return '/'
  }
})

export default router