<template>
  <div>
    <div>
      <Banner/>
    </div>
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
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components:{
    Banner
  }
};
</script>
<style>
.active{
  color: goldenrod;
}
</style>