<template>
  <div class="student">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "北京科技大学",
      address: "北京",
    };
  },
};
</script>

<style scoped>
.student {
  background-color: grey;
}
</style>