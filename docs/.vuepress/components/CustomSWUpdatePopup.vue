<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <button class="custom-sw-update-popup" @click="reload">
      <h3>{{ message }}</h3>
      <h3>{{ buttonText }}</h3>
    </button>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>

<style>
.custom-sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em 3em;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
}

.custom-sw-update-popup {
  text-align: center;
  color: #2c3e50;
  border-radius: 0.5em;
  background: linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, pink, transparent);
  background-blend-mode: screen;
  -webkit-animation: colorfulStripeChange 5s infinite alternate linear;
  animation: colorfulStripeChange 5s infinite alternate linear;
}
.custom-sw-update-popup h3 {
  margin: 0;
  line-height: 2;
}
@-webkit-keyframes colorfulStripeChange {
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
@keyframes colorfulStripeChange {
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
