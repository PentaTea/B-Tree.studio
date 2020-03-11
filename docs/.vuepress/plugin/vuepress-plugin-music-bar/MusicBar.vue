<template>
  <div class="music-bar">
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="298"
      height="52"
      src="//music.163.com/outchain/player?type=2&id=690465&auto=1&height=32"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MusicBar"
};
</script>

<style lang="stylus" scoped>
.music-bar
  position: fixed
  left: 0.5em
  bottom: 0.5em
  z-index 1000
</style>
