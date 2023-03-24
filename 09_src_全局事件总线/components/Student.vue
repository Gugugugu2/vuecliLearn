<template>
  <div class="school">
    <h2>学校姓名：{{ schName }}</h2>
    <h2>学校地址：{{ schAdd }}</h2>
    <button @click="sendStuName">把学生给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      schName: "灰灰",
      schAdd: "北京",
    };
  },
  methods: {
    sendStuName() {
      this.$bus.$emit("hello", 666);
    },
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
  mounted() {},
};
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>