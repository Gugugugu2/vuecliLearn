<template>
  <div class="school">
    <h2>学生姓名：{{ stuName }}</h2>
    <h2>学生性别：{{ stuSex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      stuName: "张三",
      stuSex: "男",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件,我收到了数据" + data);
    });
  },
};
</script>

<style scoped>
.school {
  background-color: goldenrod;
}
</style>