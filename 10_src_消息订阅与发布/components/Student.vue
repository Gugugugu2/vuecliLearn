<template>
  <div class="school">
    <h2>学生姓名：{{ stuName }}</h2>
    <h2>学生性别：{{ stuSex }}</h2>
    <button @click="sendStuName">把学生给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      stuName: "张三",
      stuSex: "男",
    };
  },
  methods: {
    sendStuName() {
      pubsub.publish('hello',666)
    },
  },
  mounted() {},
};
</script>

<style scoped>
.school {
  background-color: goldenrod;
}
</style>