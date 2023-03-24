<template>
  <div class="list">
    <h3>{{title}}分类</h3>
    <!-- 
      定义一个插槽(坑)，等着组件的使用这进行填充
     -->
    <slot name="center">我是默认值</slot>
    <slot name="footer">我是默认值</slot>

  </div>
</template>

<script>
export default {
  name: "List",
  props:["title"]
};
</script>

<style>
.list {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
  background-color: orange;
}

</style>