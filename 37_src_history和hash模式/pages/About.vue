<template>
  <div>
    <h2>我是About组件</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeRouteEnter (to, from, next) {
    // 通过路由规则，进入该组件时被调用
    console.log("哈哈哈哈哈");
    next();
  },
  beforeRouteLeave (to, from, next) {
    // 通过路由规则，离开该组件时被调用
    next();
  }
};
</script>

<style>
</style>