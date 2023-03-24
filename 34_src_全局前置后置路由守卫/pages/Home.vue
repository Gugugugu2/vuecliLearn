<template>
  <div>
    <h2>我是Home组件</h2>
    <router-link active-class="active" to="/home/news">News</router-link>

    <router-link active-class="active" to="/home/message">Message</router-link>
    <br /><br />
    <hr />
    <keep-alive :include="['News','Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>