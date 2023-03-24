<template>
  <div>
    <h1>当前求和为:{{ $store.state.sum }}</h1>
    <h1>当前求和*10为:{{ $store.getters.bigSum }}</h1>
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
  mounted() {
    console.log(this);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>