<template>
  <div id="app">
    <h1 ref="title">{{ msg }}</h1>
    <button @click="showDom">点我输出上方的DOM元素</button>
    <School />
    <School />
    <School />
    <School />
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
