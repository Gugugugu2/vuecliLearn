<template>
  <div class="container">
    <List title="美食">
      <img slot="center" src="./assets/logo.png" alt="" />

      <a slot="footer" href="https://baike.baidu.com/">点我一下呗</a>
    </List>
    <List title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">
          {{ item }}
        </li>
      </ul>
      <!-- <div slot="footer">
        <a href="https://baike.baidu.com/">点我一下呗</a>
        <br />
        <a href="https://baike.baidu.com/">点我一下呗</a>
      </div> -->

      <!-- 新的写法 -->
      <template v-slot:footer>
        <a href="https://baike.baidu.com/">点我一下呗</a>
        <br />
        <a href="https://baike.baidu.com/">点我一下呗</a>
      </template>
    </List>
    <List title="电影">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
        autoplay
        muted
      ></video>
    </List>
  </div>
</template>

<script>
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    List,
  },
  data() {
    return {
      foods: ["火锅", "牛排"],
      games: ["LanQiu", "PaiQiu"],
      films: ["AAA", "BBB"],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-between;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>