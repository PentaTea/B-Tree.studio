<template>
  <div class="custom-sw-update-popup">
    海星海星海星<br />
    <button @click="reload">海星海星</button>
  </div>
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
  padding: 1em;
  border: 1px solid #3eaf7c;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
}

.custom-sw-update-popup button {
  margin-top: 0.5em;
  padding: 0.25em 2em;
}
</style>
