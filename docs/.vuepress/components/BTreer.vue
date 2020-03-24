<template>
  <div class="BTreer" :id="BTreerId">
    <div class="BTreer-img">
      <p>
        <img :src="img_file" :alt="name" />
      </p>
    </div>
    <div class="BTreer-word">
      <h3>{{ name }}</h3>
      <p>
        <embed src="/assets/svg/briefcase.svg" />
        {{ position }} @ B-Tree Design
        Studio
      </p>
      <p>
        <embed src="/assets/svg/map-pin.svg" />
        {{ location }}
      </p>
      <p>
        <embed src="/assets/svg/globe.svg" />
        {{ lang }}
      </p>
      <p>
        <a :href="qqlink" target="_blank">
          <i class="fab fa-qq"></i>
          {{ qq }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BTreer",
  data() {
    return {
      BTreerId: "BTreerId" + this._uid,
      img_file: "",
      name: "",
      position: "",
      location: "",
      lang: "",
      qq: "",
      qqlink: ""
    };
  },
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  methods: {},
  mounted: function() {
    let a = this.data.trim().split(/\s+/);
    this.name = a[0];
    this.img_file = a[1];
    this.position = a[2];
    this.location = a[3];
    this.lang = a[4].replace(/,/g, " | ");
    this.qq = a[5];
    this.qqlink =
      "http://wpa.qq.com/msgrd?v=3&uin=" + this.qq + "&site=qq&menu=yes";
  }
};
</script>

<style>
.BTreer {
  border-bottom: 1px dotted #ddd;
  width: 100%;
  display: flex;

  padding: 30px 20px;
  flex-wrap: wrap;
}
.BTreer-img {
  display: flex;
  justify-content: center;

  min-width: 320px;
}
.BTreer img {
  width: auto;
  height: 200px;
  object-fit: contain;
}
.BTreer h3 {
  margin: 0px !important;
  line-height: 2;
  font-weight: 400;
}
.BTreer p {
  margin: 0px !important;
  line-height: 2;
}
</style>
