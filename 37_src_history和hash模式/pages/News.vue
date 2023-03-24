<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>001 <input type="text" /></li>
      <li>002 <input type="text" /></li>
      <li>003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   clearInterval(this.timer)
  //   console.log("我被销毁啦！");
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      console.log("@");
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");

    clearInterval(this.timer);
  },
};
</script>

<style>
</style>