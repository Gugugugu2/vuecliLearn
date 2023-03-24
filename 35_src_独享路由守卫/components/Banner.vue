<template>
  <div>
    <h1>我是Banner组件</h1>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="test">测试</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
    test(){
      this.$router.go(2);
    }
  },
};
</script>

<style>
</style>