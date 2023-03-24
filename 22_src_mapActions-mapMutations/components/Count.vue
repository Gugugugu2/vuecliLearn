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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前为奇数再加</button>
    <button @click="incremewait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // incrementOdd() {
    //   this.$store.dispatch("jishu", this.n);
    // },
    // incremewait() {
    //   this.$store.dispatch("waitadd", this.n);
    // },
    ...mapActions({incrementOdd:"jishu",incremewait:"waitadd"}),

    // 你传递的参数需要写在上面@click="increment(n)"
    // 借助mapMutations生成对应的方法，方法中会调用commit去练习mutations（对象方法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  mounted() {},
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>