<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和*10为:{{ bigSum }}</h1>
    <h2>学校：{{ school }}</h2>
    <h2>项目：{{ subject }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前为奇数再加</button>
    <button @click="incremewait">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    increment() {
      // this.sum += this.n;

      // 可以越过action
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      // this.sum -= this.n;
      this.$store.dispatch("jian", this.n);
    },
    incrementOdd() {
      // if (this.sum % 2 !== 0) {
      //   this.sum += this.n;
      // }

      // if (this.$store.state.sum % 2 !== 0) {
      this.$store.dispatch("jishu", this.n);
      // }
    },
    incremewait() {
      this.$store.dispatch("waitadd", this.n);
    },
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据.（对象写法）
    // ...mapState({he:"sum",xuexiao:"school",xueke:"subject"}),


    // 借助mapState生成计算属性，从state中读取数据.（数组写法）
    // 此写法必须使生成的计算属性名和state中真正的名一样
    ...mapState(["sum", "school", "subject"]),

    // 借助mapGetter生成计算属性，从getters中读取数据.（数组写法）
    ...mapGetters(['bigSum'])
  },
  mounted() {
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>