<template>
    <div class="ttt">
        <div class="rounded-2xl border-2 w-full" >
            <div class="flex justify-between">
                <div class="border-2 w-full" v-for="item in plan">
                    <div class="bg-blue-300">{{item.week}}</div>
                    <div>tag</div>
                    <div>lesson</div>
                </div>
            </div>
        </div>
        <div class="rounded-2xl border-2 w-full">
            <div class="flex justify-between">
                <div class="border-2 w-full" v-for="item in plan">
                    <div v-for="taskItem in item.taskList">{{taskItem.taskName}}</div>
                </div>
            </div>
        </div>

        <!-- <div class="bg-white" v-for="item in plan">

            <div v-bind:class="{ 'rounded-l-lg': item.week == 'MON', 'rounded-r-lg': item.week == 'SUN', }" class="">
                <div class="bg-blue-300">{{item.week}}</div>
                <div class="h-12 flex items-center" v-show="item.tag != ''">{{item.tag}}</div>

                <div class="border-2">
                    <div v-if="item.lessonList != null" v-for="lessonItem in item.lessonList" class="w-12 h-12 border-2">
                        {{lessonItem.lessonName}}
                    </div>
                </div>
            </div>
        </div>

        <div class=" bg-white" v-for="item in plan">
            <div v-bind:class="{ 'rounded-l-lg': item.week == 'MON', 'rounded-r-lg': item.week == 'SUN', }" class="mt-10">
                <div v-for="taskItem in item.taskList">
                    {{taskItem.taskName}}
                </div>
            </div>
        </div> -->
        
    </div>
    
</template>

<style lang="scss" scoped>


$hight-color: 100px;

p {
    height: $hight-color;
}

</style>

<script lang="ts" setup>
import Vue, { reactive } from 'vue'

interface Plan {
    week: String
    tag: String
    lessonList: Lesson[]
    taskList: Task[]
}

interface Lesson {
    lessonName: String
    startTime: String
    endTime: String
}

interface Task {
    taskName: String
    isMust: Boolean
}

const plan = [
    {
        "week": "MON",
        "tag": "幼儿园时光",
        "lessonList": null,
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "学能训练1页",
                "isMust": true 
            },
            {
                "taskName": "控笔训练1页",
                "isMust": false 
            },
            {
                "taskName": "感统1个动作",
                "isMust": true 
            },
            {
                "taskName": "篮球训练",
                "isMust": true 
            }
        ]
    },
    {
        "week": "TUE",
        "tag": "幼儿园时光",
        "lessonList": [
            {
                "lessonName": "画画",
                "startTime": "18:30",
                "endTime": "20:00"
            }
        ],
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "学能训练1页",
                "isMust": true 
            },
            {
                "taskName": "拼音学习1次",
                "isMust": false 
            },
            {
                "taskName": "英语指读1次",
                "isMust": true 
            }
        ]
    },
    {
        "week": "WEN",
        "tag": "幼儿园时光",
        "lessonList": [
            {
                "lessonName": "篮球",
                "startTime": "18:30",
                "endTime": "20:00"
            }
        ],
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "学能训练1页",
                "isMust": true 
            },
            {
                "taskName": "古诗学习1次",
                "isMust": true 
            }
        ]
    },
    {
        "week": "THU",
        "tag": "幼儿园时光",
        "lessonList": [
            {
                "lessonName": "英语",
                "startTime": "16:50",
                "endTime": "18:30"
            }
        ],
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "学能训练1页",
                "isMust": true 
            },
            {
                "taskName": "感统1个动作",
                "isMust": true 
            },
            {
                "taskName": "篮球训练",
                "isMust": true 
            },
            {
                "taskName": "古诗背诵1次",
                "isMust": true 
            }
        ]
    },
    {
        "week": "FRI",
        "tag": "幼儿园时光",
        "lessonList": null,
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "学能训练1页",
                "isMust": true 
            },
            {
                "taskName": "四五快读1篇",
                "isMust": false 
            },
            {
                "taskName": "思维练习1次",
                "isMust": false 
            },
            {
                "taskName": "英语指读1次",
                "isMust": true 
            }
        ]
    },
    {
        "week": "SAT",
        "tag": "",
        "lessonList":  [
            {
                "lessonName": "感统",
                "startTime": "10:00",
                "endTime": "12:00"
            },
            {
                "lessonName": "篮球",
                "startTime": "15:10",
                "endTime": "18:40"
            }
        ],
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "编程学习1次",
                "isMust": true 
            },
            {
                "taskName": "古诗背诵1次",
                "isMust": false 
            }
        ]
    },
    {
        "week": "SUN",
        "tag": "",
        "lessonList":  [
            {
                "lessonName": "英语",
                "startTime": "08:50",
                "endTime": "10:30"
            }
        ],
        "taskList": [
            {
                "taskName": "英语听60min",
                "isMust": true 
            },
            {
                "taskName": "英语指读1次",
                "isMust": true 
            },
            {
                "taskName": "感统一个动作",
                "isMust": false 
            }
        ]
    }
]


</script>