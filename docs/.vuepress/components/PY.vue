<template>
  <div class="py">
    <div
      class="py"
      style="flex-grow:1;display: flex;justify-content: center;"
      v-for="(e, index) in data"
    >
      <div
        style="padding: 5px"
        @mousedown="pyCardmousedownHandler"
        @touchstart="pyCardmousedownHandler"
        @click="pyCardClickHandler($event,e.url)"
      >
        <el-card class="py-card" shadow="hover" :body-style="{ padding: '20px' }">
          <img
            class="no-border"
            style="width: 100%; height: 150px;object-fit: contain;"
            :src="e.logo"
          />
          <VueScroll>
            <div class="py-text">
              <h3 style="margin:0;line-height: 0.5;">{{e.name}}</h3>
              <p style="line-height: 2;">{{e.description}}</p>
            </div>
          </VueScroll>
        </el-card>
      </div>
    </div>
    <div class="py" style="flex-grow:1;display: flex;justify-content: center;" v-for="e in data">
      <i style="width: 310px;"></i>
    </div>
  </div>
</template>

<script>
var data = require("../../py-list/py-list.js");

export default {
  name: "PY",
  data() {
    return {
      data: data,
      downed: 0
    };
  },
  props: {},
  mounted: function() {},
  methods: {
    pyCardmousedownHandler: function(e) {
      if (e.target.className.indexOf("__bar")) {
        this.downed = 1;
      }
    },
    pyCardClickHandler: function(e, url) {
      if (e.target.className.indexOf("__bar") != 0 && this.downed) {
        console.log(url);
        this.downed = 0;
        window.open(url, "_blank");
      }
    }
  }
};
</script>

<style>
.py {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.py-card {
  width: 300px;
  height: 400px;
}
.py-text {
  padding: 20px;
  height: 180px;
}
</style>
