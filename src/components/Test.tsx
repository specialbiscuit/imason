import { defineComponent, reactive } from "vue";

const Test = defineComponent({
    setup() {
        type Person = {
            name: String;
            age: number
        };
        const hairDresser = reactive<Person>({
            name: "Jason",
            age: 30
        });

        return () => (<div>hello { hairDresser.name }， your age is  { hairDresser.age }</div>)
    }
});

export default Test;