<template>
    <div class="flex justify-center items-center w-full h-screen">
        <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
        <div class="example bg-red-500" :class="isActive ? 'animate__animated animate__hinge' : ''" @touchstart="aaa">Example</div>
    </div>
    
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

let isActive = ref(false)
const aaa = () => {
    isActive.value = true
}
</script>

<style lang="scss" scoped>
</style>