<template>

    <!-- border-2 border-blue-100 hover:border-blue-500 focus:border-blue-500 focus:outline-none -->
    <div v-loading.fullscreen.lock="loading" element-loading-text="Loading..." :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(0, 0, 0, 0.7)">
        <div class="container">
            <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            <div>
                <input class="username" name="username" v-model="username" placeholder="username"/>
                <div class=""><span >{{ errors.username }}</span></div>
            </div>
            <div>
                <input class="password" name="password" v-model="password" type="password" placeholder="password"/>
                <div class=""><span >{{ errors.password }}</span></div>
            </div>
            <button :disabled="!meta.valid" @click="submit()">
                登录
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    background: linear-gradient(to top right, orange, pink);
    padding: 10px;
}


img {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        margin-bottom: 50px;
    }
    .username, .password {
    
        &:hover {
            border-color: red;
        }

        &:focus {
            border-color: green;
        }
    }
    .username {
        width: 360px;
        height: 32px;
        border-bottom-width: 0;
    }

    .password {
        width: 360px;
        height: 32px;
        border-bottom-width: 0;
    }

    button {
        width: 100px;
        height: 50px;
        margin-top: 20px;
        background-color: blue;
        &:hover, &:active, &:focus {
            background-color: red;
            border-width: 0px;
            border-color: green;
        }
        color: white;
    }
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { useForm  } from 'vee-validate';

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
    setTimeout(() => {
        loading.value = false
        console.log("登陆成功并跳转。。。")
    }, 3000)
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
