<template>
  <main class="page">
    <slot name="top" />
    <transition name="fade">
      <Content v-if="!loading" class="theme-default-content" ref="mainContent" />
    </transition>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <Comments :isShowComments="shouldShowComments" />
    <!-- <span id="valine"></span> -->
    <!-- <Vssue :title="VssueTitle" /> -->
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  data() {
    return {
      word_time: 0,
      loading: 1
    };
  },
  computed: {
    shouldShowComments() {
      const { comments } = this.$frontmatter;
      return comments;
    }
  },
  props: ["sidebarItems"],
  mounted() {
    this.loading = 0;
  },
  updated() {
    window.setTimeout(this.delay, 100);
  },
  methods: {
    delay() {
      document.querySelectorAll("p img").forEach((e, i) => {
        e.parentNode.setAttribute("class", "img-content");
        if (e.title) {
          console.log(e.title);
          e.style.cssText += e.title;
          e.title = "";
        }
      });

      if (this.$page.frontmatter.readingTime != false)
        try {
          document
            .getElementsByTagName("h1")[0]
            .removeChild(document.getElementById("readingTime"));
        } catch (e) {
        } finally {
          document.getElementsByTagName("h1")[0].innerHTML +=
            "<span id='readingTime' style='font-size:1rem;font-weight:400;user-select:none;'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='el-icon-time'></i>&nbsp;" +
            (
              document
                .getElementsByClassName("theme-default-content")[0]
                .innerText.replace(
                  /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\|\n|\r|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,
                  ""
                ).length / 400
            ).toFixed(2) +
            " min</span>";
        }
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

p.img-content {
  line-height: 3;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.svg-player {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  min-width: 25%;
}
</style>
