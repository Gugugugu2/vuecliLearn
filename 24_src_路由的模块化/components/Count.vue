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
    <h3>下方组件的总人数是:{{personList.length}}</h3>
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
    ...mapActions('countAbout',{incrementOdd:"jishu",incremewait:"waitadd"}),
  
    ...mapMutations('countAbout',{ increment: "JIA", decrement: "JIAN" }),
  },
  computed: {
    ...mapState('countAbout',['sum','school',"subject"]),
    ...mapState('personAbout',['personList']),
    ...mapGetters('countAbout',["bigSum"]),
  },
  mounted() {},
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>