<template>
  <div style="position:relative;top:0;left:0">
    <div class="ProductList">
      <div style="height:200px;width:200px">
        <img :src="src" alt height="100%" width="100%" style="object-fit: contain;margin: 0;" />
      </div>
      <div style="padding: 0 40px;">
        <slot></slot>
      </div>
    </div>
    <RouterLink :to="url">
      <div class="ProductList-hover" style="position:absolute;top:0;left:0;height:100%;width:100%"></div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "PL",
  data() {
    return {
      src: "",
      url: ""
    };
  },
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  mounted: function() {
    let a = this.data.trim().split(/\s+/);
    this.src = a[0];
    this.url = a[1];
  },
  methods: {}
};
</script>

<style>
.ProductList-hover:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.ProductList {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #eaecef;
  padding: 30px 20px;
}
</style>
