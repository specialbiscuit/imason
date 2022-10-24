<template>
  
    <div class="mt-6 drop-shadow-2xl animate-bounce">
        <button class="w-20 h-10 bg-blue-500  text-white hover:opacity-80 rounded-lg focus:bg-red-500 focus:outline-none  cursor-pointer"  @click="logout()">登出</button>
    </div>

    <div class="block text-center">
      <div>{{userStore.$state.name}} -- {{userStore.$state.isAdmin}}</div>
      <span class="demonstration"
        >Switch when indicator is hovered (default)</span
      >
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block text-center" m="t-4">
      <span class="demonstration">Switch when indicator is clicked</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { computed } from '@vue/runtime-core'
    import { useUserStore } from '../stores/user'
    import { useRouter } from 'vue-router'
    const userStore = useUserStore()
    const router = useRouter()

    const name = computed(() => {
      console.log(11111)
      if (userStore.$state.name == '') {
        userStore.logout()
        router.push('/Login')
      }
    })

    const isAdmin = computed(() => userStore.$state.isAdmin)

    const logout = () => {
      userStore.logout()
      router.push('/Login')
    }

  </script>
  <style scoped>
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>