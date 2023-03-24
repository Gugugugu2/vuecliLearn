<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age + 11 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是学生",
      maAge: this.age,
    };
  },
  //简单声明接收

  props: ["name", "sex", "age"],
  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String,
  //     required: true,//name是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default: 99,//默认值
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style>
.student {
  background-color: goldenrod;
}
</style>