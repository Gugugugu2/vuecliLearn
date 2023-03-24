// 该文件用于创建Vuex中最为核心的store
// 引入Vuex
import Vuex from 'vuex';

import Vue from 'vue';

Vue.use(Vuex);

let timer = null;

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        jishu(context, value) {
            if (context.state.sum % 2) {
                context.commit('JISHU', value);
            }
        },

        waitadd(context, value) {
            if (timer) {
                return alert("尼吉尼玛呢？");
            }
            timer = setTimeout(() => {
                timer = null;
                context.commit("WAITADD", value);

            }, 500);
        }
    },
    mutations: {
        JIA(state, value) {
            console.log("mutations中的+被调用了");
            state.sum += value;
        },

        JIAN(state, value) {
            state.sum -= value;
        },


        JISHU(state, value) {
            state.sum += value;
        },

        WAITADD(state, value) {
            state.sum += value;
        },
    },
    state: {
        sum: 0,
        school: "尚硅谷",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
}

// 人员功能相关的配置
const personOptions = {
    namespaced: true,

    actions: {},
    mutations: {

        ADD_PERSON(state, value) {
            state.personList.push(value);
        }
    },
    state: {
        personList: [
            { id: "001", name: "张三" },
            { id: "002", name: "李四" },
        ]
    },
    getters: {},
}


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})