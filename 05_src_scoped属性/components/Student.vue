<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<style >
.student {
  background-color: goldenrod;
}
</style>

<style scoped lang="less">
.student {
  h2 {
    color: whitesmoke;
  }
}
</style>
