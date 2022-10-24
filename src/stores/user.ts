import { defineStore } from "pinia";

const apiLogin = (user: string, password: string) => {
    console.log(user)
    console.log(password)
    if (user === '405099739@qq.com' && password === '1112') return Promise.resolve({ isAdmin: true})
    if (password === '111') return Promise.resolve({ isAdmin: false, name: user })
    return Promise.reject(new Error('invalid credentials1111'))
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'Eduardo',
        isAdmin: true,
    }),

    actions: {
        logout() {
            this.$patch({
              name: '',
              isAdmin: false,
            })
        
            // we could do other stuff like redirecting the user
        },
        /**
         * Attempt to login a user
         * @param user 
         * @param password
         */
        async login(user: string, password: string) {
            const userData = await apiLogin(user, password)
            
            this.$patch({
                name: user,
                ...userData
            })
        }
    },
})