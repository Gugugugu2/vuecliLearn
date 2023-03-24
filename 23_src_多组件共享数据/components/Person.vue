<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" v-model="name" placeholder="请输入名字" />
    <button @click="addPer()">添加</button>
    <ul>
      <li v-for="item in $store.state.personList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <h2>求和结果为{{sum}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList","sum"]),
  },
  methods: {
    addPer() {
      const newPer = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON",newPer);
      this.name = "";
    },
  },
};
</script>

<style>
</style>