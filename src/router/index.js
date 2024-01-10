import { createRouter, createWebHistory } from "vue-router"
import { api } from "../api";

const routes = [

  {
    path: "/",
    redirect: "/login",
    beforeEnter: async (to, from, next) => {
      try {
        let token = localStorage.token;
      if (!token) return next();
      const {data:data} = await api('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      console.log(data);
      if (!data) {
        return next();
      } else {
        next("/dashboard");
      }
      } catch (error) {
        console.log(error);
        delete localStorage.token;
      }
    },

    component: () => import("../layouts/login.vue"),
    children: [
      { path: 'login', component: () => import("../pages/login.vue") }

    ]
  },



  {
    path: "/dashboard",
    beforeEnter: async (to, from, next) => {
      let token = localStorage.token;
      if (!token) return next("/login");
      if (!token) return next();
      const { data:data } = await api('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!data) {
        return next("/login")
      } else {
        next();
      }
    },

    component: () => import("../layouts/Main.vue"),
    children: [
      {
        path: '',
        component: () => import("../pages/dashboard.vue"),
      },
      {
        path: 'products',
        component: () => import("../pages/products/products.vue"),
      },
      {
        path: 'product-add',
        component: () => import("../pages/products/addProducts.vue")
      }
    ]
  },



  //   {
  //     path: '/:catchAll(.*)*',
  //     component: () => import('../pages/ErrorNotFound.vue')
  //   },

];


const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHistory()
});



export default router
