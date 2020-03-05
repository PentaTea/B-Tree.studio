<template>
  <main class="page">
    <div class="reading-time">
      <h4>{{ word_time }}</h4>
      <h4>min</h4>
      <h4>read</h4>
    </div>
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  data() {
    return {
      word_num: 0,
      word_time: 0
    };
  },
  props: ["sidebarItems"],
  mounted: function() {
    //图片样式处理
    let img = document.querySelectorAll("p img");
    for (let index = 0; index < img.length; index++) {
      img[index].parentNode.setAttribute("class", "img-content");
    }
    //阅读时间计算
    this.word_num = document
      .getElementsByClassName("theme-default-content")[0]
      .innerText.replace(
        /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|\n|\r|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,
        ""
      ).length;
    this.word_time = (this.word_num / 400).toFixed(2);
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

p.img-content
  line-height 3
  display -webkit-flex
  display flex
  flex-wrap wrap
  justify-content space-around

.svg-player
  display -webkit-flex
  display flex
  justify-content center
  margin 0 20px
  min-width 25%

.reading-time
  padding-top 4rem
  float right
  //writing-mode vertical-rl
  margin-left 20px
  margin-right 20px
  text-align center


.reading-time h4
  font-weight 400
  line-height 0.3

.ProductList
    width 100%
    display flex
    align-items center
    border-top 1px solid #eaecef
    padding 30px 20px
</style>
