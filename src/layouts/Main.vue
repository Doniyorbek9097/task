<template>
    <q-layout view="hHh LpR fff">
  
      <q-header reveal elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="../assets/vue.svg">
            </q-avatar>
            Vue Task
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-scroll-area class="fit">
            <div class="q-pa-sm">
              <q-list bordered v-for="item in sidebarList">
                <q-item clickable v-ripple :to="item.path">
                  <q-item-section avatar>
                    <q-icon color="primary" name="local_mall" />
                  </q-item-section>
                  <q-item-section >{{ item.title }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-grey-8 text-white text-center">
        <q-toolbar>
          <q-toolbar-title>
            <div>this face a site by created Doniyorbek Ergashev</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const leftDrawerOpen = ref(false)
  const toggleLeftDrawer =  () => leftDrawerOpen.value = !leftDrawerOpen.value;
  const sidebarList = [
  {
      title: "Dashboard",
      path:"/dashboard",
    },
    {
      title: "Products",
      path:"/dashboard/products",
    },
    
  ]



  </script>