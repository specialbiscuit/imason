<template>
  
    <div class="w-full h-[100px] flex justify-center items-center bg-blue-400">
      <!-- <svg viewBox="100 100"  version="1.1" xmlns="http://www.w3.org/2000/svg" class="flex justify-center items-center animate-spin-slow">
        <circle cx="25" cy="25" r="10" stroke="white" fill="transparent" stroke-width="2" stroke-dasharray="20 10"/>
      </svg> -->

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="mt-20">
          <path stroke="#000000" fill="none"  stroke-width="5" d="M0,100  L50,0 100,100 M25,60 L18,60 80,60" class="aaa"></path>
      </svg>
    </div>
    
    
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

      <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
      <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

      <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5" stroke-dasharray="40 20"/>
      <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

      <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
      <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
          stroke="orange" fill="transparent" stroke-width="5"/>

      <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
          stroke="green" fill="transparent" stroke-width="5"/>

      <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
    </svg>


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

  .aaa {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

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