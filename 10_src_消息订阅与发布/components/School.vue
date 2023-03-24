<template>
  <div class="school">
    <h2>学校姓名：{{ schName }}</h2>
    <h2>学校地址：{{ schAdd }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      schName: "灰灰",
      schAdd: "北京",
    };
  },

  mounted() {
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log("有人发布了hello消息,回调函数也执行了 消息是" + data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>