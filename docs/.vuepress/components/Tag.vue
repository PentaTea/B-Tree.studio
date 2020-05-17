<template>
  <div id="TagList-layout" class="theme-default-content">
    <Waterfall
      :list="$frontmatterKey.list"
      :gutter="10"
      :width="240"
      :gridWidth="-1"
      :breakpoints="{
    1200: {
      rowPerView: 4,
    },
    1000: {
      rowPerView: 3,
    },
    800: { 
      rowPerView: 2,
    },
    600: { 
      rowPerView: 1,
    }
  }"
      backgroundColor="#ffffff"
      ref="waterfall"
    >
      <template slot="item" slot-scope="tag">
        <div class="block">
          <div>
            <div class="tag-list" :style="getColor(tag.data.name+timestamp)">
              <RouterLink :to="tag.data.path">
                <p>{{tag.data.name}}</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Waterfall from "vue-waterfall-plugin";
var randomColor = require("randomcolor");

export default {
  components: { Waterfall },
  data() {
    return {
      paginationComponent: null,
      themeColor: null,
      timestamp: null
    };
  },

  computed: {},

  created() {},
  mounted() {
    console.log(this.$frontmatterKey.list);
    this.themeColor = randomColor();
    this.timestamp = new Date().getTime();
  },

  methods: {
    getColor(seed) {
      return (
        "background:" +
        randomColor({
          seed: seed,
          hue: "random",
          luminosity: "bright",
          format: "rgba",
          alpha: 0.1
        }) +
        ";"
      );
    },
    getBgUrl(src, index) {
      document.styleSheets[0].addRule(
        ".img-container-" + index + "::after",
        "background:url('" + src + "') no-repeat center / cover !important;"
      );
    }
  }
};
</script>

<style lang="stylus">
#TagList-layout {
  max-width: 100%;

  .block {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    >div {
      background: #eee;
    }
  }

  .tag-list {
    height: 100px;
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    border-radius: 5px;
    transition: all 0.2s;

    a {
      text-decoration: none;
    }

    p {
      padding: 0 20px;
      line-height: 100px;
      color: $textColor;
      text-align: center;
    }

    .img-container {
      position: absolute;
      top: 0;
      left: 30%;
      height: 100%;
      width: 60%;
    }
  }

  .tag-list:hover {
    box-shadow: 2px 2px 9px 2px #cccccc;
  }
}
</style>

