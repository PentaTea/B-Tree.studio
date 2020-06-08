<template>
  <div id="PostList-layout" class="theme-default-content">
    <div class="a" v-for="page in pages">
      <RouterLink :to="page.path">1234</RouterLink>
    </div>
    <component
      v-show="show"
      v-if="waterfallComponent"
      :is="waterfallComponent"
      :list="pages"
      :gutter="10"
      :width="240"
      :gridWidth="-1"
      :breakpoints="{
    1300: {
      rowPerView: 4,
    },
    1100: {
      rowPerView: 3,
    },
    900: { 
      rowPerView: 2,
    },
    600: { 
      rowPerView: 1,
    }
  }"
      backgroundColor="#ffffff"
      ref="waterfall"
    >
      <template slot="item" slot-scope="page">
        <div class="block">
          <div>
            <RouterLink :to="page.data.path">
              <div class="card" :style="getColor(page.data.title+timestamp,'bright',0.1)">
                <div class="card-text">
                  <div class="card-tag">
                    <div v-for="tag in page.data.frontmatter.tag">
                      <RouterLink :to="'/blog/tag/' + tag">
                        <div class="tag" :style="getColor(tag+timestamp,'light',1)">{{tag}}</div>
                      </RouterLink>
                    </div>
                  </div>
                  <h3>{{page.data.title}}</h3>
                  <p>{{page.data.frontmatter.description}}</p>
                </div>
                <div class="card-img">
                  <ul :class="['thumbnail-list',imgCont(page.data)]">
                    <li v-for="src in thumbnail(page.data)">
                      <div class="item">
                        <img @load="refresh()" draggable="false" :src="src" alt />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </template>
    </component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";

var randomColor = require("randomcolor");

export default {
  data() {
    return {
      paginationComponent: null,
      themeColor: null,
      timestamp: null,
      refresh_handle: null,
      waterfallComponent: null,
      show: 0
    };
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    }
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },
  mounted() {
    import("vue-waterfall-plugin").then(module => {
      this.waterfallComponent = module.default;
      this.refresh_handle = setInterval(this.refresh, 500);
      this.refresh();
      this.show = 1;
    });
    this.themeColor = randomColor();
    this.timestamp = new Date().getTime();
  },

  methods: {
    refresh() {
      if (this.$refs.waterfall) {
        this.$refs.waterfall.refresh();
        console.log("refresh");
      }
    },
    getPaginationComponent() {
      const n = "Pagination";
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    },
    thumbnail(page) {
      let thumbnail = page.frontmatter.thumbnail || [];
      return typeof thumbnail == "string" ? [thumbnail] : thumbnail;
    },
    imgCont(page) {
      return "cont-" + this.thumbnail(page).length;
    },
    getColor(seed, luminosity, alpha) {
      return (
        "background:" +
        randomColor({
          seed: seed,
          hue: "random",
          luminosity: luminosity,
          format: "rgba",
          alpha: alpha
        }) +
        ";"
      );
    }
  }
};
</script>

<style lang="stylus">
$card-radius = 8px;

#PostList-layout {
  max-width: 100%;
  box-sizing: border-box;

  a {
    text-decoration: none;
  }

  .a {
    display: none;
  }

  .header {
    border-radius: $card-radius;
    height: 100px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;

    p {
      padding: 0 40px;
      line-height: 100px;
    }
  }

  .grid {
    overflow: visible;
    border-radius: 5px;
    margin: 0;
  }

  .block {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    >div {
      border-radius: $card-radius;
      background: #eee;
    }

    .card {
      border-radius: $card-radius;
      background: #c7ccc7;
      padding: 20px;
      transition: all 0.1s linear;
    }

    .card:hover {
      box-shadow: 2px 2px 9px 2px #cccccc;
    }

    .card-text {
      h3 {
        font-weight: 400;
        color: $textColor;
      }

      p {
        color: $textColor;
      }

      .card-tag {
        display: flex;
        flex-wrap: wrap;
      }

      .tag {
        color: $textColor;
        margin: 5px;
        padding: 5px 20px;
        border-radius: 3px;
        transition: all 0.1s linear;

        &:hover {
          box-shadow: 2px 2px 9px 2px #cccccc;
        }
      }
    }

    .card-img {
      .item {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }
}

.thumbnail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.thumbnail-list>li {
  overflow: hidden;
  border-radius: 5px;
}

@supports (object-fit: cover) {
  .thumbnail-list>li img {
    object-fit: cover;
  }
}

.thumbnail-list.cont-2>li+li {
  margin-top: 15px;
}

.thumbnail-list.cont-3 {
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
}

.thumbnail-list.cont-3>li {
  box-sizing: border-box;
  padding-left: 15px;
  width: 50%;
}

.thumbnail-list.cont-3>li:first-child {
  width: 100%;
  margin-bottom: 15px;
}

.thumbnail-list.cont-3 li+li {
  height: 150px;
}

@supports (object-fit: cover) {
  .thumbnail-list.cont-3 li+li img {
    object-fit: cover;
    height: 150px;
  }
}

.thumbnail-list.cont-4 {
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
  position: relative;
}

.thumbnail-list.cont-4>li {
  box-sizing: border-box;
  padding-left: 15px;
  width: 50%;
}

.thumbnail-list.cont-4>li:first-child {
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
}

@supports (object-fit: cover) {
  .thumbnail-list.cont-4>li:first-child img {
    object-fit: cover;
    height: 150px;
  }
}

.thumbnail-list.cont-4>li:nth-child(3), .thumbnail-list.cont-4>li:nth-child(4) {
  height: 5.78125rem;
}

@supports (object-fit: cover) {
  .thumbnail-list.cont-4>li:nth-child(3) img, .thumbnail-list.cont-4>li:nth-child(4) img {
    object-fit: cover;
    height: 5.78125rem;
  }
}

.thumbnail-list.cont-4>li:nth-child(4) {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

