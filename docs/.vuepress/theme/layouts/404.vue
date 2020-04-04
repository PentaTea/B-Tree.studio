<template>
  <transition name="fade">
    <div class="theme-container" v-show="!loading">
      <div class="theme-default-content">
        <h1>404</h1>
        <blockquote>
          <h3 style="font-weight:400">{{hitokoto}}</h3>
        </blockquote>

        <RouterLink to="/">
          <h4 style="font-weight:400">回到主页</h4>
        </RouterLink>
        <hr />
        <h4>
          —— {{from_who}}
          「 {{from}} 」｜ 一言 ｜ by hitokoto.cn
        </h4>
      </div>
      <div class="theme-default-content">
        <Vssue title="404" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      hitokoto: "",
      from: "",
      from_who: "",
      loading: 1
    };
  },
  props: {},
  mounted: function() {
    fetch("https://v1.hitokoto.cn")
      .then(response => response.json())
      .then(data => {
        this.hitokoto = data.hitokoto;
        this.from = data.from;
        this.from_who = data.from_who;
        this.loading = 0;
      })
      .catch(err => {
        console.error(err);
        this.loading = 0;
      });
    let d = new Date();
    if (d.getMonth() + 1 == 4 && d.getDate() == 4) {
      document.getElementsByTagName("html")[0].style.filter = "grayscale(1)";
    }
  },
  methods: {}
};
</script>
