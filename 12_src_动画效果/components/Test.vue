<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好呀！</h1>
    </transition>
  </div>
</template>

<script>
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
/* 
animation-duration 属性定义需要多长时间才能完成动画。

animation-delay 属性规定动画开始的延迟时间。

animation-iteration-count 属性指定动画应运行的次数。

animation-direction 属性指定是向前播放、向后播放还是交替播放动画。
animation-direction 属性可接受以下值：
normal - 动画正常播放（向前）。默认值
reverse - 动画以反方向播放（向后）
alternate - 动画先向前播放，然后向后
alternate-reverse - 动画先向后播放，然后向前

*/
h1 {
  background-color: orange;
  color: rgb(51, 111, 164);
}

.hello-enter-active {
  animation: atguigu 1s;
}

.hello-leave-active {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>