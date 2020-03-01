<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  mounted: function() {
    let img = document.querySelectorAll("p img");
    for (let index = 0; index < img.length; index++) {
      img[index].parentNode.setAttribute("class", "img-content");
    }
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
</style>
