// 该文件用于创建Vuex中最为核心的store
// 引入Vuex
import Vuex from 'vuex';

import Vue from 'vue';

Vue.use(Vuex);

let timer = null;


// 准备actions ---- 用于响应组件中的动作
const actions = {
    // jia: function () {
    //     console.log("action中的+被调用了");
    // }

    // 简写形式
    // jia(context, value) {
    //     // console.log("action中的+被调用了");
    //     context.commit('JIA', value);
    // },

    jian(context, value) {
        context.commit("JIAN", value);
    },

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
            // this.sum += this.n;
            timer = null;
            context.commit("WAITADD", value);

        }, 500);
    }
}

// 准备mutations ---- 用于操作数据（state）
const mutations = {
    
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
    }
}


// 准备state ---- 用于存储数据
const state = {
    sum: 0,
    school:"尚硅谷",
    subject:"前端"
};


// 准备getters---用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations,
    state,
    getters,
})