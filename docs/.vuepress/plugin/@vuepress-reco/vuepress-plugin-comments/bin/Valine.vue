<template>
  <div class="valine-wrapper">
    <div id="valine"></div>
  </div>
</template>

<script>
  export default {
    name: "Valine",
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    mounted: function () {
      this.initValine();
    },
    methods: {
      initValine() {
        const Valine = require("valine");
        const valineOptions = {
          el: "#valine",
          path: window.location.pathname,
          ...this.options
        };

        new Valine(valineOptions);
      }
    },
    watch: {
      $route(to, from) {
        if (to.path !== from.path) {
          // 切换页面时刷新评论
          // this.$router.go(0)
          setTimeout(() => {
            this.initValine();
          }, 300);
        }
      }
    }
  };
</script>

<style lang="stylus">
  .valine-wrapper {
    #valine.v {
      .vbtn {
        color: #2c3e50;
        color: var(--text-color);
        border: 1px solid #eaecef;
        border-color: var(--border-color);

        &:hover {
          color: $accentColor;
          border-color: $accentColor;
        }
      }

      .vwrap {
        background: rgba(27, 31, 35, 0.05);
        background: var(--code-color);
        border: 1px solid #eaecef;
        border-color: var(--border-color);

        .vheader .vinput {
          border-bottom: 1px dashed var(--border-color);

          &:focus {
            border-bottom-color: $accentColor;
          }

          &:-internal-autofill-selected {
            background-color: var(--code-color) !important;
          }
        }
      }

      .vinfo {
        padding-left: 0.6rem;
      }

      .vcard {
        .vquote {
          margin-left: 0;
          border-left: none;
        }

        .vimg {
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 0.25rem;
          border: none;
        }

        .vhead .vnick {
          color: $accentColor;

          &::before {
            background: $accentColor;
          }
        }
      }

      .vh {
        border-bottom: none;

        .vhead .vsys {
          color: $accentColor;
          color: var(--text-color);
          background: rgba(27, 31, 35, 0.05);
          background: var(--code-color);
        }

        .vmeta {
          margin-bottom: 1rem;

          .vat {
            margin-right: 0.3rem;
            background: rgba(27, 31, 35, 0.05);
            background: var(--code-color);
            border-radius: 0.25rem;
            padding: 0 0.4rem;
            color: var(--text-color);
            border: 1px solid #eaecef;
            border-color: var(--border-color);

            &:hover {
              color: $accentColor;
              border-color: $accentColor;
            }
          }
        }

        .vcontent {
          background: rgba(27, 31, 35, 0.05);
          background: var(--code-color);
          border-radius: 0.25rem;
          margin: 0 0.3rem;
          padding: 0.1rem 0.6rem 0.05rem 0.6rem;

          p .at {
            color: $accentColor;
          }

          &.expand:before {
            z-index: 1;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0), var(--background-color));
          }

          &.expand:after {
            color: $accentColor;
            color: var(--text-color);
            background: #fff;
            background: var(--background-color);
          }
        }
      }

      .info {
        padding-right: 0.6rem;
      }

      code,
      pre,
      .vbtn {
        background: var(--background-color);
        color: var(--text-color);
      }

      a {
        color: $accentColor;

        &::before {
          background: $accentColor;
        }
      }
    }
  }
</style>