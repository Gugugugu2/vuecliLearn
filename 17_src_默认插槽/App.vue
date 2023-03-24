<template>
  <div class="container">
    <List title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </List>
    <List title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">
          {{item}}
        </li>
      </ul>
    </List>
    <List title="电影"> 
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls autoplay muted></video>
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
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>