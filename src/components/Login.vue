<template>

    <div v-loading.fullscreen.lock="loading" element-loading-text="Loading..." :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(0, 0, 0, 0.7)" class="border-2 w-full h-screen  bg-gradient-to-tr from-red-300 via-green-200 to-blue-300 flex flex-col justify-center items-center">
        <div>{{userStore.$state.name}} -- {{userStore.$state.isAdmin}}</div>
        <div class="mb-10">
            <img class="w-64 h-64 rounded-full drop-shadow-2xl origin-center hover:animate-spin" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        </div>
        <div class="space-y-6">
            <div class="w-80 md:w-96 lg:w-96 xl:w-96 h-12 lg:h-16 lg:text-lg drop-shadow-2xl">
                <input class="w-full h-full border-2 rounded-full indent-6 border-blue-100 hover:border-blue-500 focus:border-blue-500 focus:outline-none" name="username" v-model="username" placeholder="username"/>
                <div class="indent-6 text-red-400"><span >{{ errors.username }}</span></div>
            </div>
            <div class="w-80 md:w-96 lg:w-96 xl:w-96 h-12 lg:h-16 lg:text-lg drop-shadow-2xl">
                <input class="w-full h-full border-2 pl-1/10 rounded-full indent-6 border-blue-100 hover:border-blue-500 focus:border-blue-500 focus:outline-none" name="password" v-model="password" type="password" placeholder="password"/>
                <div class="indent-6 text-red-400"><span >{{ errors.password }}</span></div>
            </div>
        </div>
        <div class="mt-6 drop-shadow-2xl animate-bounce">
            <button class="w-20 h-10 bg-blue-500  text-white hover:opacity-80 rounded-lg focus:bg-red-500 focus:outline-none  cursor-pointer" :disabled="!meta.valid" @click="submit()">登录</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useForm  } from 'vee-validate';
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import { mapActions, mapState, mapStores } from 'pinia';
// import useStore from 'element-plus/es/components/table/src/store';
const userStore = useUserStore()
const router = useRouter()

const { errors, useFieldModel, meta } = useForm({
    initialValues: {
        username: "405099739@qq.com",
        password: "111"
    },
    validationSchema: {
        username(value: any) {
            if (!value) {
                return ''
            }
            if (value == "405099739@qq.com") {
                return true
            }
        },
        password(value: any) {
            if (!value) {
                return ''
            }
            if (value == "111") {
                return true
            }
        },
    },
});

const [username, password] = useFieldModel(['username', 'password']);

let loading = ref(false)
const submit = () => {
    console.log(1231)
    loading.value = true

    console.log("开始调用登录api")
    // setTimeout(() => {
        userStore.login('405099739@qq.com', '111')
        loading.value = false
        console.log("登陆成功并跳转。。。")
        router.push("/T")
    // }, 3000)
}

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

</script>
