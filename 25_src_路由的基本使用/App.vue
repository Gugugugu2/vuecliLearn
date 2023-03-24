<template>
  <div>
    <div>
      <!-- Vue借助router-link标签实现路由的切换 -->
      <router-link active-class="active" to="/about">About</router-link>
      <br>
      <router-link active-class="active" to="/home">Home</router-link>
    </div>

    <div>
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: { About, Home },
};
</script>
<style>
.active{
  color: goldenrod;
}
</style>