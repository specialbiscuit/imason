<template>
    <div class="flex justify-center items-center w-full h-screen">
        <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
        <div class="example bg-red-500" :class="isActive ? 'animate__animated animate__hinge' : ''" @click="aaa">Example</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

let isActive = ref(false)
const aaa = () => {
    isActive.value = true
}


const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}
const a = [1,2,3,4,5];
a.find(item => item === 3)

const deps = {
'采购部':[1,2,3],
'人事部':[5,8,12],
'行政部':[5,14,79],
'运输部':[3,64,105],
}

const member = Object.values(deps).flat(Infinity)
console.log(`成员${member}`)
const keys = Object.keys(deps)
console.log(keys)


const {a:a1, b, c, d} = obj || {}
console.log(a1)


const name = obj?.a

const value = null;

if ((value??'') !== '') {}

const fn = async () => {
    const res1 = await fn1();
}

const fn1 = () => {}
const fn2 = () => {}

// 并发处理
const fn_2 = () => {
    Promise.all([fn1(), fn2()]).then(res => {
        console.log(res)
    })
    //Promise.race()
}



</script>

<style lang="scss" scoped>
</style>