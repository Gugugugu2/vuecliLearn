<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__bounceInDown"
    leave-active-class="animate__backOutUp"
    appear
    >
      <h1 v-show="isShow" key="1">你好呀！</h1>
      <h1 v-show="!isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  color: rgb(242, 246, 249);
}

</style>