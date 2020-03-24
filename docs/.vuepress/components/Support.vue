<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
    <el-table-column prop="amount" label="金额(¥)" width="100"></el-table-column>
    <el-table-column prop="description" label="备注"></el-table-column>
  </el-table>
</template>

<script>
var data = require("../../support/list.js");

export default {
  name: "Support",
  data() {
    return {
      data: data
    };
  },
  props: {},
  mounted: function() {},
  methods: {}
};
</script>

<style>
</style>
